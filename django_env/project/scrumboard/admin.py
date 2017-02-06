from django.contrib import admin

#Import the classes
from .models import List, Card

# Register your models here.
admin.site.register(List)
admin.site.register(Card)