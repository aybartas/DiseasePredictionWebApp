# Generated by Django 3.2 on 2021-05-25 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_record_feature_1'),
    ]

    operations = [
        migrations.RenameField(
            model_name='record',
            old_name='feature_1',
            new_name='Feature_28_Every_Day',
        ),
        migrations.RenameField(
            model_name='record',
            old_name='feature_2',
            new_name='Feature_29_Mornings',
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_29_No_Difference',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_31_Yes',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_37_Yes',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_5',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_50_Yes',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='record',
            name='Feature_6_Yes',
            field=models.CharField(default='', max_length=50),
        ),
    ]