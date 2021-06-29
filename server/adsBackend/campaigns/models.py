from django.db import models

# Create your models here.

# Choices Listing here
BID_TYPE = [
    ('CPC', 'CPC'),
    ('VCPM', 'VCPM')
]

PACING = [
    ('On', 'On'),
    ('Off', 'Off')
]

class Campaign(models.Model):
    name = models.CharField(max_length=100)
    bidType = models.CharField(max_length=100, choices=BID_TYPE)
    cpc = models.FloatField()
    budget = models.FloatField()
    pacing = models.CharField(max_length=100 ,choices=PACING)
    scheduling =  models.JSONField()
    targeting =  models.JSONField()

    def __str__(self):
        return self.name

class Content(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE, related_name='content')
    url = models.URLField()
    title = models.CharField(max_length=100)
    brand_name = models.CharField(max_length=100)
    description = models.TextField()
    added_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title