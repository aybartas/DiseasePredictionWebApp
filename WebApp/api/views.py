import joblib
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
import pathlib
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from .models import Disease, Record
from .serializers import DiseaseSerializer, CreateDiseaseSerializer, CreateRecordSerializer, RecordSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import json

import pickle
import pandas as pd


# Create your views here.

class DiseaseView(generics.ListAPIView):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer


class CreateDiseaseView(APIView):
    serializer_class = CreateDiseaseSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            disease_name = serializer.data.get('name')
            queryset = Disease.objects.filter(name=disease_name)
            if queryset.exists():
                return Response(status=status.HTTP_400_BAD_REQUEST)
            else:
                disease = Disease(name=disease_name)
                disease.save()
            return Response(DiseaseSerializer(disease).data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class CreateRecordView(APIView):
    serializer_class = CreateRecordSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():

            features_list = [int(i) for i in serializer.data.values()]
            print(features_list)
            model_path = str(pathlib.Path().absolute()) + "\model.sav"
            # try:
            model = joblib.load(model_path)
            single_prediction = model.predict_proba([features_list])
            single_prediction = single_prediction.flatten().tolist()
            json_response = json.dumps(single_prediction)
            return JsonResponse(json_response, safe=False)

            # except ValueError as e:
            #   return Response(e.args[0], status.HTTP_400_BAD_REQUEST)

            # return Response(RecordSerializer(record).data, status=status.HTTP_201_CREATED)
