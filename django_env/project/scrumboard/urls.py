"""from django.conf.urls import url
from .api import ListAPI, CardAPI
from django.views.generic import TemplateView

urlpatterns = [
	url(r'^lists$', ListAPI.as_view()), #url needs a function, as_view() method...
	url(r'^cards$', CardAPI.as_view()),
	url(r'^home', TemplateView.as_view(template_name="scrumboard/home.html")),

]
"""
from scrumboard.api import ListViewSet, CardViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'lists', ListViewSet) #tells router to generate urls for views
router.register(r'cards', CardViewSet)# ''

urlpatterns = router.urls