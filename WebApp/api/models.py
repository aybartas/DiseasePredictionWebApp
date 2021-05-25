from django.db import models


# Create your models here.
class Disease(models.Model):
    name = models.CharField(max_length=100, default="")


class Record(models.Model):
    Feature_37_Yes = models.CharField(max_length=50, default="")
    Feature_29_No_Difference = models.CharField(max_length=50, default="")
    Feature_6_Yes = models.CharField(max_length=50, default="")
    Feature_29_Mornings = models.CharField(max_length=50, default="")
    Feature_28_Every_Day = models.CharField(max_length=50, default="")
    Feature_31_Yes = models.CharField(max_length=50, default="")
    Feature_5 = models.CharField(max_length=50, default="")
    Feature_50_Yes = models.CharField(max_length=50, default="")
    predicted_disease = ""
    creation_time = models.DateTimeField(auto_now_add=True)
