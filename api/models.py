from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=255, blank=True, null=True)
    linkedin_profile = models.URLField(blank=True, null=True)
    emails = models.TextField()  # Store comma-separated emails
    phone_numbers = models.TextField()  # Store comma-separated phone numbers
    comments = models.TextField(blank=True, null=True)
    communication_periodicity = models.IntegerField(default=14)  # Days

    def __str__(self):
        return self.name

class CommunicationMethod(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    sequence = models.IntegerField()
    mandatory = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Communication(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    method = models.ForeignKey(CommunicationMethod, on_delete=models.CASCADE)
    date = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.company.name} - {self.method.name} on {self.date}"
