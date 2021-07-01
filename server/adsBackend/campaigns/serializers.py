from rest_framework import serializers
from .models import Campaign, Content

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'campaign', 'url', 'title', 'brand_name', 'description', 'added_date']

class CampaignSerializer(serializers.ModelSerializer):
    content = ContentSerializer(many=True, read_only=True)
    class Meta:
        model = Campaign
        fields = ['id', 'name', 'bidType', 'cpc', 'budget', 'pacing', 'photoFileName', 'scheduling', 'targeting', 'content']