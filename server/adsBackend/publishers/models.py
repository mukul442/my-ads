from django.db import models

# Create your models here.

class Sites(models.Model):
    siteName = models.URLField()
    dateCreated = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.siteName