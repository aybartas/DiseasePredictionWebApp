from django.urls import path
from .views import DiseaseView, CreateDiseaseView

urlpatterns = [
    path('home', DiseaseView.as_view()),
    path('addDisease', CreateDiseaseView.as_view())
]
