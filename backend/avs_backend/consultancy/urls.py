# consultancy/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'services', views.ServiceViewSet, basename='service')
router.register(r'jobs', views.JobViewSet, basename='job')
router.register(r'programs', views.EducationalProgramViewSet, basename='educationalprogram')
router.register(r'applications', views.ApplicationViewSet, basename='application')
router.register(r'profiles', views.ProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', views.register_user, name='register'),          
    path('jobs/count/', views.jobs_count, name='jobs-count'),                     
    path('programs/count/', views.programs_count, name='programs-count'),         
    path('applications/count/', views.applications_count, name='applications-count'), 
]