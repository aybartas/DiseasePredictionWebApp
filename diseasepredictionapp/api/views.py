from django.shortcuts import render
from rest_framework import generics
from .models import Disease
from .serializers import DiseaseSerializer
from django.http import HttpResponse


# Create your views here.

class DiseaseView(generics.ListAPIView):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer


def main(request):
    print(request.body)
    return HttpResponse("<h1> hello <h1>")
