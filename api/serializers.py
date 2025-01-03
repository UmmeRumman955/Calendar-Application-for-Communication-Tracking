from rest_framework import serializers
from .models import Company, CommunicationMethod, Communication

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class CommunicationMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationMethod
        fields = '__all__'

class CommunicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Communication
        fields = '__all__'
