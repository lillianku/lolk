from django.test import TestCase, Client

class HomeTest(TestCase):
    def setUp(self):
        self.my_client = Client()

    def test_get_home(self):
        response = self.my_client.get('')
        self.assertContains(response, 'LOL K')
