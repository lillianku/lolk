from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse

class LogoutTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User(username='test_username')
        self.user.save()
        self.client.force_login(self.user)

    def test_logout(self):
        response = self.client.post(reverse('logout'), follow=True)
        print(response.context['user'])
        self.assertNotEqual(self.user, response.context['user'])
