# users/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user_type', 'phone_number', 'profile_picture', 'bio', 'created_at')

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'profile')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    user_type = serializers.ChoiceField(choices=UserProfile.USER_TYPES, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 
                 'first_name', 'last_name', 'user_type')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user_type = validated_data.pop('user_type')
        validated_data.pop('password2')
        
        user = User.objects.create_user(**validated_data)
        
        # Update user profile
        user.userprofile.user_type = user_type
        user.userprofile.save()
    
        
        return user