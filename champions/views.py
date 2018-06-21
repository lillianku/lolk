from django.shortcuts import render, get_object_or_404
import requests
from django.contrib.auth.decorators import login_required
from .models import Battle
from django.contrib.auth.models import User
from django.http import HttpResponse
# Create your views here.

def home(request):
    battles = Battle.objects.order_by('-battle_date')
    rankings = ranking()
    # https://stackoverflow.com/questions/3121979/how-to-sort-list-tuple-of-lists-tuples
    rankings.sort(key=lambda tup: tup[1], reverse=True)
    context = {
        'title': 'LOL K',
        'battles': battles,
        'rankings': rankings[:5],
    }
    return render(request, 'home.html', context)

def ranking():
    all_users = User.objects.all()
    rankings = []
    for user in all_users:
        battles = Battle.objects.filter(player=user)
        victories = battles.filter(result='victory')
        if len(battles) == 0:
            percentage = 0
        else:
            percentage = len(victories)/len(battles)
        percent = round(percentage * 100, 2)
        rankings.append((user, f'{percent}%'))
    return(rankings)

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

@login_required
def save(request):
    if request.method == 'POST':
        if (request.POST['user_choice'] and request.POST['comp_choice'] and request.POST['result']):
            battle = Battle()
            battle.user_choice = request.POST['user_choice']
            battle.comp_choice = request.POST['comp_choice']
            battle.result = request.POST['result']
            battle.player = request.user
            battle.save()
            return HttpResponse('')
        else:
            print ('didnt pass conditions')
    else:
        print ('isnt post method')

@login_required
def show_battle(request, battle_id):
    battle = Battle.objects.filter(id=battle_id)
    user_url = f'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/{battle[0].user_choice}.json'
    comp_url = f'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/{battle[0].comp_choice}.json'
    user_response = requests.get(user_url)
    comp_response = requests.get(comp_url)
    print(user_url)
    player = user_response.json()['data']
    comp = comp_response.json()['data']
    context ={
        'title': f'{battle[0].result}',
        'battle': battle[0],
        'player': player[f'{battle[0].user_choice}'],
        'comp': comp[f'{battle[0].comp_choice}'],
    }
    return render(request, 'showbattle.html', context)
