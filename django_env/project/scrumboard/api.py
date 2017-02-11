#Removing ListAPIView, which serves objects in a list.
	#from rest_framework.generics import ListAPIView

#Import ModelViewSet class. A ViewSet is a set of views. It can handle GET, POST, PUT, DELETE http methods
from rest_framework.viewsets import ModelViewSet

#import permissions class from rest framework
from rest_framework import permissions

from .serializers import ListSerializer, CardSerializer
from .models import List, Card


class ListViewSet(ModelViewSet):
	"""docstring for ListAPI"""
	queryset = List.objects.all() #query all rows, assign to queryset
	serializer_class = ListSerializer
	permission_classes = (permissions.IsAuthenticated,)


class CardViewSet(ModelViewSet):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
	permission_classes = (permissions.IsAuthenticated,)