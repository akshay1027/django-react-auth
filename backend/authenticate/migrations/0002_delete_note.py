# Generated by Django 4.0.1 on 2022-01-14 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authenticate', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Note',
        ),
    ]