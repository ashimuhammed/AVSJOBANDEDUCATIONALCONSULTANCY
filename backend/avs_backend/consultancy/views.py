# consultancy/views.py
# consultancy/views.py
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.db.models import Q
from .models import Job, EducationalProgram, Application, Profile, Service
from .serializers import (
    JobSerializer, EducationalProgramSerializer, 
    ApplicationSerializer, ProfileSerializer, 
    UserSerializer, RegisterSerializer, ServiceSerializer
)

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer

    def get_queryset(self):
        queryset = Job.objects.filter(is_active=True)
        
        # Filter by job type
        job_type = self.request.query_params.get('type')
        if job_type:
            queryset = queryset.filter(job_type=job_type)
        
        # Filter by industry
        industry = self.request.query_params.get('industry')
        if industry:
            queryset = queryset.filter(industry=industry)
        
        # Search
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) |
                Q(company__icontains=search) |
                Q(description__icontains=search) |
                Q(location__icontains=search)
            )
        
        return queryset.order_by('-posted_date')
    
    # ADD THIS COUNT ACTION
    @action(detail=False, methods=['get'])
    def count(self, request):
        count = self.get_queryset().count()
        return Response({'count': count})

class EducationalProgramViewSet(viewsets.ModelViewSet):
    queryset = EducationalProgram.objects.filter(is_active=True)
    serializer_class = EducationalProgramSerializer

    def get_queryset(self):
        queryset = EducationalProgram.objects.filter(is_active=True)
        
        # Filter by program type
        program_type = self.request.query_params.get('type')
        if program_type:
            queryset = queryset.filter(program_type=program_type)
        
        # Search
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(institution__icontains=search) |
                Q(description__icontains=search)
            )
        
        return queryset.order_by('-id')
    
    # ADD THIS COUNT ACTION
    @action(detail=False, methods=['get'])
    def count(self, request):
        count = self.get_queryset().count()
        return Response({'count': count})

class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Application.objects.filter(user=self.request.user)
        return Application.objects.none()
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    # ADD THIS COUNT ACTION
    @action(detail=False, methods=['get'])
    def count(self, request):
        if request.user.is_authenticated:
            count = Application.objects.filter(user=request.user, status='approved').count()
        else:
            count = 0
        return Response({'count': count})

# ... rest of your existing code ...

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Profile.objects.filter(user=self.request.user)
        return Profile.objects.none()

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        
        # Create profile for user
        Profile.objects.create(user=user)
        
        return Response({
            'message': 'User registered successfully',
            'user_id': user.id
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ADD THESE FUNCTIONS AT THE END OF YOUR views.py FILE

@api_view(['GET'])
def jobs_count(request):
    try:
        count = Job.objects.filter(is_active=True).count()
        return Response({'count': count})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def programs_count(request):
    try:
        count = EducationalProgram.objects.filter(is_active=True).count()
        return Response({'count': count})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def applications_count(request):
    try:
        count = Application.objects.filter(status='approved').count()
        return Response({'count': count})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)