from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

	#This is a view(function definition)	
def home(request):
	return render(request, "main/home.html",
	 {'messageVar': 'Rendered variable!'})	