from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('addFeature', index),
    path('adminHome', index),
    path('prediction', index),

]
