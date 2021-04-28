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
            disease_name = serializer.data.get('name')
            queryset = Disease.objects.filter(name=disease_name)
            if queryset.exists():
                return Response(status=status.HTTP_400_BAD_REQUEST)
            else:
                disease = Disease(name=disease_name)
                disease.save()
            return Response(DiseaseSerializer(disease).data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
