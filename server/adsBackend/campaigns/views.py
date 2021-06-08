from rest_framework import viewsets
from .models import Campaign, Content
from .serializers import CampaignSerializer, ContentSerializer

# Create your views here.

class CampaignView(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer

class ContentView(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
