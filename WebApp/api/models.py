from django.db import models


# Create your models here.
class Disease(models.Model):
    name = models.CharField(max_length=100, default="")


class Record(models.Model):
    feature_1 = models.CharField(max_length=50, default="")
    feature_2 = models.CharField(max_length=50, default="")
    predicted_disease = ""
    creation_time = models.DateTimeField(auto_now_add=True)

