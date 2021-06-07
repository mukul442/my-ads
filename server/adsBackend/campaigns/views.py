from rest_framework import viewsets
from .models import Campaign
from .serializers import CampaignSerializer

# Create your views here.

class CampaignView(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer
