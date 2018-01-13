from django.contrib.auth.models import User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		#Configuring fields to send back to client.  Beware security here
		fields = ('id', 'username')

