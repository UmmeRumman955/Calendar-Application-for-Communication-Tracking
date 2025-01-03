# Generated by Django 5.1.3 on 2025-01-03 08:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CommunicationMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
                ('sequence', models.IntegerField()),
                ('mandatory', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('linkedin_profile', models.URLField(blank=True, null=True)),
                ('emails', models.TextField()),
                ('phone_numbers', models.TextField()),
                ('comments', models.TextField(blank=True, null=True)),
                ('communication_periodicity', models.IntegerField(default=14)),
            ],
        ),
        migrations.CreateModel(
            name='Communication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('notes', models.TextField(blank=True, null=True)),
                ('method', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.communicationmethod')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.company')),
            ],
        ),
    ]
