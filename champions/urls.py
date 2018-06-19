from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('champions/', views.champions, name='champions'),
    path('battle/', views.battle, name='battle'),
    path('save/', views.save),
]
