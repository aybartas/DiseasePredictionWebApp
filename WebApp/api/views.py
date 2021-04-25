from django.shortcuts import render
from rest_framework import generics
from .models import Disease
from .serializers import DiseaseSerializer


# Create your views here.

class DiseaseView(generics.ListAPIView):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer
