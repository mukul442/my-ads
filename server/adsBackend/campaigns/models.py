from django.db import models

# Create your models here.

class Campaign(models.Model):
    name = models.CharField(max_length=100)
    cpc = models.FloatField()
    budget = models.FloatField()
    scheduling =  models.JSONField()

    def __str__(self):
        return self.name
