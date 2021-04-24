from django.db import models
import string
import random
# Create your models here.

class Disease(models.Model):
    
    id = models.IntegerField(default="",unique=True,primary_key=True)
    name = models.CharField(max_length=100,default="")


class Record(models.Model):
    
    id = models.IntegerField(max_length=10,default="", unique=True,primary_key=True)
    feature_1 = models.CharField(max_length=50,default="")
    feature_2 = models.CharField(max_length=50,default="")
    feature_3 = models.CharField(max_length=50,default="")
    predicted_disease = models.CharField(max_length=50,default="")
    creation_time = models.DateTimeField(auto_now_add=True)


