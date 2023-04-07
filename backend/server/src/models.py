from django.db import models

# Create your models here.
class Product(models.Model):
    name        = models.CharField(max_length=64)
    image       = models.TextField()
    price       = models.PositiveIntegerField()
    details     = models.JSONField()
    description = models.TextField()

    class Meta:
        ordering = ['id']
