# Generated by Django 2.0.5 on 2018-06-19 18:31

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('champions', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Match',
            new_name='Battle',
        ),
    ]
