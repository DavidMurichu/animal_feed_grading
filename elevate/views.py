from django.shortcuts import render, redirect
from .forms import Ingridients_form
from django.contrib import messages
from .models import Ingredients
from django.http import JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def home(request):
    ingredients = Ingredients.objects.values_list('name', 'id')
    context={
        'ingridents': ingredients,
    }
    return render(request, 'home.html', context)


def Ingridient(request): 
    form=Ingridients_form()
    if request.method == 'POST':
        form = Ingridients_form(request.POST)
        if form.is_valid():
            # Extract cleaned data from the form
            cleaned_data = form.cleaned_data
            ingredient_name = cleaned_data['name']
            # Use get_or_create to get the existing record or create a new one
            ingredient, created = Ingredients.objects.get_or_create(name=ingredient_name, defaults=cleaned_data)
            # If the record already exists, update its fields with the new values
            if not created:
                for field in Ingredients._meta.fields:
                    if field.name != 'id' and field.name != 'name':  # Exclude id and name fields
                        setattr(ingredient, field.name, cleaned_data[field.name])
                ingredient.save()
            # Redirect to a success page or another view
            return redirect('home')
    return render(request, 'ingridients.html', {'form':form})
@csrf_exempt
def mix(request):
    unique_ingredient_names = Ingredients.objects.values_list('name', flat=True).distinct()
    ingredients = Ingredients.objects.all()
    ingredients_data = serialize('json', ingredients)
    context={
        'data':ingredients_data,
        'unique_ingredient_names':unique_ingredient_names,
    }
    return render(request, 'mix.html', context)
    
def delete(request, id):
    Object=Ingredients.objects.get(pk=id)
    Object.delete()
    return redirect( 'home')
    