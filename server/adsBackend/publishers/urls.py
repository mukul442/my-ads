from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('publishers', views.PublisherView, basename='publishers')

urlpatterns = [
    path('', include(router.urls))
]