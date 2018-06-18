import os
from decouple import config

DEV_MODE = config('DEV_MODE', default=False)

from django.core.wsgi import get_wsgi_application

if DEV_MODE:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
else:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.prod_settings")


application = get_wsgi_application()
