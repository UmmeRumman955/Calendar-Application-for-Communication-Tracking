from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, CommunicationMethodViewSet, CommunicationViewSet

router = DefaultRouter()
router.register('companies', CompanyViewSet)
router.register('methods', CommunicationMethodViewSet)
router.register('communications', CommunicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
