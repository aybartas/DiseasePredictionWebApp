from django.urls import path
from .views import DiseaseView, main

urlpatterns = [
    path('a', main),

    path('home', DiseaseView.as_view())
]


