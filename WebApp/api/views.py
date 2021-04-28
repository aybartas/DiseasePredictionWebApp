from django.shortcuts import render
from rest_framework import generics, status
from .models import Disease
from .serializers import DiseaseSerializer, CreateDiseaseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class DiseaseView(generics.ListAPIView):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer


class CreateDiseaseView(APIView):
    serializer_class = CreateDiseaseSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            disease_name = serializer.data.name
            queryset = Disease.objects.filter(name=disease_name)
            if queryset.exists():
                print('disease already exists')
            else:
                disease = Disease(name=disease_name)
            return Response(DiseaseSerializer(disease).data, status=status.HTTP_200_OK)
