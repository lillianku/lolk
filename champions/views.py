from django.shortcuts import render
import requests
from django.contrib.auth.decorators import login_required
# Create your views here.

def home(request):
    context = {
        'title': 'LOL K'
    }
    return render(request, 'home.html', context)

def champions(request):
    url = 'https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'
    response = requests.get(url)
    champions = response.json()['data']
    context = {
        'title': 'CHAMPIONS',
        'champions': champions
    }
    return render(request, 'champions.html', context)

@login_required
def battle(request):
    url = 'https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'
    response = requests.get(url)
    champions = response.json()['data']
    context = {
        'title': 'BATTLE',
        'champions': champions
    }
    return render(request, 'battle.html', context)
