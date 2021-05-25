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
        fields = (
        'Feature_37_Yes', 'Feature_29_No_Difference', 'Feature_6_Yes', 'Feature_29_Mornings', 'Feature_28_Every_Day',
        'Feature_31_Yes', 'Feature_5', 'Feature_50_Yes')

