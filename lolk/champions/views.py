from django.shortcuts import render
import requests
# Create your views here.

def home(request):
    return render(request, 'home.html')

def champions(request):
    url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'
    response = requests.get(url)
    champions = response.json()['data']
    context = {
        'champions': champions
    }
    return render(request, 'champions.html', context)
