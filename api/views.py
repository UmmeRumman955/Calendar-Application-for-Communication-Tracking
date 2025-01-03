from rest_framework import viewsets
from .models import Company, CommunicationMethod, Communication
from .serializers import CompanySerializer, CommunicationMethodSerializer, CommunicationSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CommunicationMethodViewSet(viewsets.ModelViewSet):
    queryset = CommunicationMethod.objects.all()
    serializer_class = CommunicationMethodSerializer

class CommunicationViewSet(viewsets.ModelViewSet):
    queryset = Communication.objects.all()
    serializer_class = CommunicationSerializer
