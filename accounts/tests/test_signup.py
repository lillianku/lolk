from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

class SignupTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_get_signup(self):
        response = self.client.get('/accounts/signup/', follow=True)
        self.assertContains(response, 'Join The Fray')

    def test_signup(self):
            return self.client.post(reverse('signup'), {
                'first_name': 'FirstName',
                'last_name': 'LastName',
                'email': 'Test@email.com',
                'password': 'password',
            }, follow=True)
