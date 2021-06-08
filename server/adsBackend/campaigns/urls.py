from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('campaign', views.CampaignView, basename='campaign')
router.register('content', views.ContentView, basename='content')


urlpatterns = [
    path('', include(router.urls))
]