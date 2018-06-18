#!/usr/bin/env python
import os
import sys
from decouple import config

DEV_MODE = config('DEV_MODE', default=False)

if __name__ == "__main__":
    if DEV_MODE:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.prod_settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
