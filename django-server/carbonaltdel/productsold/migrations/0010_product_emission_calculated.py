# Generated by Django 4.1.3 on 2022-11-19 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_product_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='emission_calculated',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6, verbose_name='tonnes'),
        ),
    ]