from rest_framework import serializers
from .models import Disease, Record


# Serializer for responding client
class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = ('id', 'name')


# Serializer that will handle post request and get data from payload to return something
class CreateDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = ('name',)


# Serializer to respond client
class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('feature_1', 'feature_2', 'predicted_disease', 'creation_time')


# Serializer that will handle post request and get data from payload to return something
class CreateRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('feature_1', 'feature_2')
