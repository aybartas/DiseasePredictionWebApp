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
            record_feature_1 = serializer.data.get('feature_1')
            record_feature_2 = serializer.data.get('feature_2')
            record_predicted_disease = ""
            record_creation_time = ""
            record = Record(feature_1=record_feature_1, feature_2=record_feature_2)
            record.save()

            ml_model_path = str(pathlib.Path().absolute()) + "\sdsp_model.pkl"
            scalar_model_path = str(pathlib.Path().absolute()) + "\scaler.pkl"
            ml_mdl = joblib.load(ml_model_path)
            scalar_mdl = joblib.load(scalar_model_path)

            # try:

            prediction = ml_mdl.predict(scalar_mdl.transform([[2344, 0, 1]]))
            print(prediction)
            """
            requested_data = request.data
            print(requested_data["feature_1"])
            print(requested_data)
            df = pd.DataFrame(requested_data, columns=["Gender", "ApplicantIncome"])
            print("dataframecreated:")
            print(df)
            encoded_input = pd.get_dummies(df)
            print("encodedinput:")
            print(encoded_input)
            scalar = MinMaxScaler()
            print("MinMaxScaler:")
            dm_X = scalar.fit_transform(encoded_input)
            print("dm_X")
            print(dm_X)

            y_pred = ml_mdl.predict(dm_X)
            print("prediction: ")
            print(y_pred)
            """

            return JsonResponse("prediction:{0}".format(prediction), safe=False)

            # except ValueError as e:
            #   return Response(e.args[0], status.HTTP_400_BAD_REQUEST)

            # return Response(RecordSerializer(record).data, status=status.HTTP_201_CREATED)
