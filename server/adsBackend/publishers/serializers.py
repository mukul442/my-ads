from django.db.models import fields
from rest_framework import serializers
from .models import Sites

class SitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sites
        fields = ['id', 'siteName', 'dateCreated']