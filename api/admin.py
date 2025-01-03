from django.contrib import admin
from .models import Company, CommunicationMethod, Communication

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'communication_periodicity')
    search_fields = ('name', 'location', 'emails')
    list_filter = ('communication_periodicity',)
    ordering = ('name',)

@admin.register(CommunicationMethod)
class CommunicationMethodAdmin(admin.ModelAdmin):
    list_display = ('name', 'sequence', 'mandatory')
    search_fields = ('name',)
    ordering = ('sequence',)

@admin.register(Communication)
class CommunicationAdmin(admin.ModelAdmin):
    list_display = ('company', 'method', 'date')
    search_fields = ('company__name', 'method__name', 'notes')
    list_filter = ('method', 'date')
    ordering = ('date',)