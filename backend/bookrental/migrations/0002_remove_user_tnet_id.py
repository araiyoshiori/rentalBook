# Generated by Django 2.1.7 on 2019-05-25 02:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookrental', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='tnet_id',
        ),
    ]
