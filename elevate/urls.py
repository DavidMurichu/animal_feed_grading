from django.urls import path
from . import views

urlpatterns = [
   
    path('',views.home, name='home'),
    path('add_ingridient/',views.Ingridient, name='add_ingtridients'),
    path('mix/',views.mix, name='mix'),
    path('delete/<int:id>',views.delete, name='delete'),
    
    
    
]