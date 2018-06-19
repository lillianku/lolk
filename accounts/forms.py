from django.forms import ModelForm
from django.contrib.auth.models import User

class SignUpForm(ModelForm):
  # We use this special inner Meta class to customize the form.
    class Meta():
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password',]
