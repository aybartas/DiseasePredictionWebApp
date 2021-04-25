from django.urls import path
from .views import DiseaseView

urlpatterns = [
    path('home', DiseaseView.as_view())
]
