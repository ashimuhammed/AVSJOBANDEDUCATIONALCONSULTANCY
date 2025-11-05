# users/views.py
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

@api_view(['GET'])
def user_stats(request):
    if request.user.is_authenticated:
        user = request.user
        stats = {
            'username': user.username,
            'profile_complete': bool(user.first_name and user.last_name and user.email),
        }
        if hasattr(user, 'userprofile'):
            stats['user_type'] = user.userprofile.user_type
        return Response(stats)
    return Response({'error': 'Not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
