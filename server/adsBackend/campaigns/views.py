from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from .models import Campaign, Content
from .serializers import CampaignSerializer, ContentSerializer

# Create your views here.

class CampaignView(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer

class ContentView(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
