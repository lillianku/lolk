from django.test import TestCase, Client

class ChampionsTest(TestCase):
    def setUp(self):
        self.my_client = Client()

    def test_get_champions(self):
        response = self.my_client.get('/champions/')
        self.assertContains(response, 'Click on a Champion')
