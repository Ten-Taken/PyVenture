from rest_framework.generics import ListAPIView

from .serializers import ListSerializer, CardSerializer
from .models import List, Card


class ListAPI(ListAPIView):
	"""docstring for ListAPI"""
	queryset = List.objects.all() #query all rows, assign to queryset
	serializer_class = ListSerializer



class CardAPI(ListAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
