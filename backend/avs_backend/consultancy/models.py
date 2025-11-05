# consultancy/models.py
from django.db import models
from django.contrib.auth.models import User

class Service(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=100, help_text="FontAwesome icon class")
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.name

class Job(models.Model):
    JOB_TYPES = [
        ('full_time', 'Full Time'),
        ('part_time', 'Part Time'),
        ('contract', 'Contract'),
        ('internship', 'Internship'),
        ('remote', 'Remote'),
    ]
    
    INDUSTRIES = [
        ('technology', 'Technology'),
        ('healthcare', 'Healthcare'),
        ('education', 'Education'),
        ('finance', 'Finance'),
        ('manufacturing', 'Manufacturing'),
        ('other', 'Other'),
    ]
    
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    job_type = models.CharField(max_length=20, choices=JOB_TYPES, default='full_time')
    industry = models.CharField(max_length=20, choices=INDUSTRIES, default='technology')
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    requirements = models.TextField()
    benefits = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    posted_date = models.DateTimeField(auto_now_add=True)
    application_deadline = models.DateField(null=True, blank=True)
    contact_email = models.EmailField(blank=True)
    
    def __str__(self):
        return f"{self.title} at {self.company}"

class EducationalProgram(models.Model):
    PROGRAM_TYPES = [
        ('undergraduate', 'Undergraduate'),
        ('graduate', 'Graduate'),
        ('certificate', 'Certificate'),
        ('diploma', 'Diploma'),
        ('online', 'Online Course'),
    ]
    
    name = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    program_type = models.CharField(max_length=20, choices=PROGRAM_TYPES, default='undergraduate')
    duration = models.CharField(max_length=100)
    description = models.TextField()
    tuition_fee = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    entry_requirements = models.TextField()
    application_deadline = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    location = models.CharField(max_length=100, blank=True)
    website = models.URLField(blank=True)
    
    def __str__(self):
        return f"{self.name} - {self.institution}"

class Application(models.Model):
    APPLICATION_STATUS = [
        ('pending', 'Pending'),
        ('under_review', 'Under Review'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    ]
    
    APPLICATION_TYPES = [
        ('job', 'Job Application'),
        ('program', 'Educational Program Application'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    application_type = models.CharField(max_length=20, choices=APPLICATION_TYPES)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True, blank=True)
    educational_program = models.ForeignKey(EducationalProgram, on_delete=models.CASCADE, null=True, blank=True)
    cover_letter = models.TextField(blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    status = models.CharField(max_length=20, choices=APPLICATION_STATUS, default='pending')
    applied_date = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)
    
    def __str__(self):
        if self.job:
            return f"{self.user.username} - {self.job.title}"
        elif self.educational_program:
            return f"{self.user.username} - {self.educational_program.name}"
        return f"{self.user.username} - Application"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    education_level = models.CharField(max_length=100, blank=True)
    work_experience = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    resume = models.FileField(upload_to='profiles/resumes/', null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profiles/pictures/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.username} - Profile"