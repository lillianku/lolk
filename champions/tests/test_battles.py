from django.test import TestCase, Client
from django.contrib.auth.models import User

class BattleTest(TestCase):
    def setUp(self):
        self.user = User(username='test_username')
        self.user.save()
        self.client = Client()

    def test_get_battle(self):
        self.client.force_login(self.user)
        response = self.client.get('/battle/')
        self.assertContains(response, 'Battle Ground')
