from rest_framework import serializers
from .models import Disease


# Serializer for responding client
class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = ('id', 'name')


# Serializer that will handle post request and get data from payload to return something
class CreateDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = 'name'
