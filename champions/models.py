from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Match(models.Model):
    user_choice = models.CharField(max_length=100)
    comp_choice = models.CharField(max_length=100)
    result = models.CharField(max_length=10)
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    battle_date = models.DateTimeField(default=timezone.now)
