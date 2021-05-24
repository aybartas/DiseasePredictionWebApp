from django.urls import path
from .views import DiseaseView, CreateDiseaseView, CreateRecordView

urlpatterns = [
    path('home', DiseaseView.as_view()),
    path('addDisease', CreateDiseaseView.as_view()),
    path('addRecord', CreateRecordView.as_view())
]

