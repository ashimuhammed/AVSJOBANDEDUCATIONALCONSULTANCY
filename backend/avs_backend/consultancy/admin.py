# consultancy/admin.py
from django.contrib import admin
from .models import Service, Job, EducationalProgram, Application, Profile

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name']

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'job_type', 'location', 'is_active', 'posted_date']
    list_filter = ['job_type', 'industry', 'is_active', 'posted_date']
    search_fields = ['title', 'company', 'location']
    list_editable = ['is_active']

@admin.register(EducationalProgram)
class EducationalProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'institution', 'program_type', 'duration', 'is_active']
    list_filter = ['program_type', 'is_active']
    search_fields = ['name', 'institution']
    list_editable = ['is_active']

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['user', 'application_type', 'status', 'applied_date']
    list_filter = ['application_type', 'status', 'applied_date']
    search_fields = ['user__username', 'job__title', 'educational_program__name']

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone_number', 'education_level']
    search_fields = ['user__username', 'user__email']