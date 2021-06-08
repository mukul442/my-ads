from rest_framework import serializers
from .models import Campaign, Content

class CampaignSerializer(serializers.ModelSerializer):
    content = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Campaign
        fields = ['id', 'name', 'cpc', 'budget', 'scheduling', 'content']


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'campaign', 'url', 'title', 'brand_name', 'description', 'added_date']