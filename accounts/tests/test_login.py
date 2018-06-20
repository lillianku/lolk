from django.test import TestCase, Client
from django.contrib.auth.models import User

class LoginTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_get_login(self):
        response = self.client.get('/accounts/login/', follow=True)
        self.assertContains(response, 'Login Below')
