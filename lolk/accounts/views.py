from django.shortcuts import render, redirect
from .forms import SignUpForm
from django.contrib import auth

# Create your views here.
def signup(request):
    registered = False # <= look! it's template boolean
    # This is totally optional, we'll use it to let the user know they're registered
    if request.method == 'POST':
        signup_form = SignUpForm(data=request.POST)
        if signup_form.is_valid():
            user = signup_form.save()
            user.set_password(user.password)
            user.save()
            registered = True
    else:
        signup_form = SignUpForm()
    context = {
        'title':'Join The Fray',
        'signup_form':signup_form,
        'registered': registered,
    }
    return render(request, 'signup.html', context)

def login(request):
    if request.method == 'POST':
        user = auth.authenticate(
        username=request.POST['username'],
        password=request.POST['password'])
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            context = {
                'title':'Something Went Wrong',
                'error':'Username or Password Invalid'
            }
            return render(request, 'login.html', context)
    return render(request, 'login.html', {'title':'Please Login'})

def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        return redirect('home')
