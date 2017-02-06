from django.conf.urls import url
from .api import ListAPI, CardAPI

urlpatterns = [
	url(r'^lists$', ListAPI.as_view()), #url needs a function, as_view() method...
	url(r'^cards$', CardAPI.as_view())

]