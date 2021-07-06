from rest_framework import viewsets
from .models import Sites
from .serializers import SitesSerializer

# Create your views here.
class PublisherView(viewsets.ModelViewSet):
    queryset = Sites.objects.all()
    serializer_class = SitesSerializer
