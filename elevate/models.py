from django.db import models

# Create your models here.
class Ingredients(models.Model):
    name=models.CharField(blank=False, max_length=50)
    dry_matter=models.FloatField(blank=False, default=0)
    crude_protein=models.FloatField(blank=False,default=0)
    crude_fiber=models.FloatField(blank=False, default=0)
    calcium=models.FloatField(blank=False, default=0)
    phosphorous=models.FloatField(blank=False, default=0)
    Energy=models.FloatField(blank=False, default=0)
    lysine=models.FloatField(blank=False, default=0)
    methionin=models.FloatField(blank=False, default=0)
    
    def __str__(self):
        return self.name
    
    