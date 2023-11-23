from django import forms
from .models import Ingredients
class Ingridients_form(forms.ModelForm):
    class Meta:
        model=Ingredients
        fields=[
            'name',
            'dry_matter',
            'crude_protein',
            'crude_fiber',
            'calcium',
            'phosphorous',
            'Energy',
            'lysine',
            'methionin'
        ]
        
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ingredient Name'}),
            'dry_matter': forms.NumberInput(attrs={'placeholder': 'DM%'}),
            'crude_protein': forms.NumberInput(attrs={'placeholder': 'CP%'}),
            'crude_fiber': forms.NumberInput(attrs={'placeholder': 'CF%'}),
            'calcium': forms.NumberInput(attrs={'placeholder': 'Ca%'}),
            'phosphorous': forms.NumberInput(attrs={'placeholder': 'P%'}),
            'Energy': forms.NumberInput(attrs={'placeholder': 'ME%'}),
            'lysine': forms.NumberInput(attrs={'placeholder': 'Lysine%'}),
            'methionin': forms.NumberInput(attrs={'placeholder': 'Methionin%'}),
        }