# Generated by Django 3.2 on 2021-04-24 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='feature_3',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='record',
            name='id',
            field=models.IntegerField(default='', max_length=10, primary_key=True, serialize=False, unique=True),
        ),
    ]
