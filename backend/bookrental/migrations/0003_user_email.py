# Generated by Django 2.1.7 on 2019-05-25 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookrental', '0002_remove_user_tnet_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]
