from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('<int:user_id>/profile/', views.profile, name='profile'),
    path('<int:user_id>/delete/', views.delete, name='delete'),
    path('<int:user_id>/update/', views.update, name='update'),
]
