from django.shortcuts import render
from rest_framework import generics, status
from .models import Disease
from .serializers import DiseaseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class DiseaseView(generics.ListAPIView):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer
