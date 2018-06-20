from django.test import TestCase, Client
from django.contrib.auth.models import User

class LoginTest(TestCase):
    def setUp(self):
        self.user = User(username='test_username')
        self.user.set_password('test_password')
        self.user.save()
        self.client = Client()

    def test_get_login(self):
        response = self.client.get('/accounts/login/', follow=True)
        self.assertContains(response, 'Login Below')

    def test_login_success(self):
         response = self.post_login('test_username', 'test_password')
         self.assertEqual(self.user, response.context['user'])
         self.assertContains(response, "About The Game")

    def post_login(self, test_username, test_password):
        return self.client.post('/accounts/login/', {
            'username': 'test_username',
            'password': 'test_password'
        }, follow=True)
