# backend/create_sample_data.py
import os
import django
from datetime import date, timedelta

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'avs_backend.settings')
django.setup()

from django.contrib.auth.models import User
from consultancy.models import Service, Job, EducationalProgram, Application, Profile
from users.models import UserProfile

def create_sample_services():
    """Create the 6 main services for AVS Consultancy"""
    services = [
        {
            'name': 'Career Counseling',
            'description': 'Professional career guidance and counseling to help you choose the right career path based on your skills, interests, and market trends.',
            'icon': 'fa-user-tie',
            'order': 1
        },
        {
            'name': 'Job Placement', 
            'description': 'Find your dream job with our comprehensive job placement services and extensive network of employer connections across various industries.',
            'icon': 'fa-briefcase',
            'order': 2
        },
        {
            'name': 'Educational Guidance',
            'description': 'Expert guidance for selecting educational programs and institutions that match your academic goals and career aspirations.',
            'icon': 'fa-graduation-cap',
            'order': 3
        },
        {
            'name': 'Resume Building',
            'description': 'Professional resume writing and optimization services to make your application stand out to employers and educational institutions.',
            'icon': 'fa-file-alt',
            'order': 4
        },
        {
            'name': 'Interview Preparation',
            'description': 'Prepare for interviews with mock sessions, personalized feedback, and coaching from industry experts.',
            'icon': 'fa-comments',
            'order': 5
        },
        {
            'name': 'Skill Development',
            'description': 'Enhance your skills with our specialized training programs, workshops, and certification courses.',
            'icon': 'fa-laptop-code',
            'order': 6
        },
    ]
    
    for service_data in services:
        service, created = Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
        if created:
            print(f"✅ Created service: {service.name}")
        else:
            print(f"📝 Service already exists: {service.name}")

def create_sample_jobs():
    """Create sample job listings"""
    jobs = [
        {
            'title': 'Frontend Developer',
            'company': 'Tech Solutions Inc',
            'description': 'We are looking for a skilled Frontend Developer with 3+ years of experience in React, JavaScript, and modern web technologies. You will be responsible for developing user-facing features, optimizing applications for maximum speed, and collaborating with our design team.',
            'location': 'New York, NY',
            'job_type': 'full_time',
            'salary': 85000,
            'requirements': '3+ years of React experience, proficiency in JavaScript, HTML5, CSS3, experience with Redux, Git, and responsive design.',
            'benefits': 'Health insurance, remote work options, professional development budget, flexible hours, stock options'
        },
        {
            'title': 'Data Analyst', 
            'company': 'Data Insights LLC',
            'description': 'Join our data team to analyze complex data sets, create reports and dashboards, and provide actionable business insights. Ideal candidate has strong analytical skills and experience with data visualization tools.',
            'location': 'Remote',
            'job_type': 'remote',
            'salary': 72000,
            'requirements': 'Bachelor\'s degree in Data Science or related field, experience with SQL, Python, Tableau, Excel, and statistical analysis.',
            'benefits': 'Flexible hours, learning budget, wellness program, fully remote, equipment provided'
        },
        {
            'title': 'Marketing Manager',
            'company': 'Global Brands Co',
            'description': 'We are seeking an experienced Marketing Manager to develop and implement marketing strategies, manage campaigns, and lead our marketing team to drive brand awareness and customer acquisition.',
            'location': 'Chicago, IL',
            'job_type': 'full_time',
            'salary': 78000,
            'requirements': '5+ years marketing experience, digital marketing expertise, team management skills, analytics proficiency.',
            'benefits': 'Health and dental insurance, performance bonuses, career growth opportunities, company events'
        },
        {
            'title': 'Software Engineer Intern',
            'company': 'Innovate Tech',
            'description': 'Summer internship for computer science students interested in gaining hands-on experience with software development, working on real projects with mentorship from senior engineers.',
            'location': 'San Francisco, CA',
            'job_type': 'internship',
            'salary': 45000,
            'requirements': 'Currently enrolled in Computer Science program, basic programming knowledge, eager to learn.',
            'benefits': 'Mentorship program, networking opportunities, potential full-time offer, housing stipend'
        },
        {
            'title': 'UX/UI Designer',
            'company': 'Creative Digital Agency',
            'description': 'Create beautiful and functional user interfaces for web and mobile applications. Work closely with product managers and developers to deliver exceptional user experiences.',
            'location': 'Austin, TX',
            'job_type': 'full_time',
            'salary': 75000,
            'requirements': '3+ years UX/UI design experience, proficiency in Figma, Adobe Creative Suite, portfolio required.',
            'benefits': 'Creative freedom, latest tech equipment, professional development, flexible schedule'
        },
        {
            'title': 'Project Manager',
            'company': 'Construction Experts Ltd',
            'description': 'Manage construction projects from conception to completion, ensuring they are delivered on time and within budget while maintaining quality standards.',
            'location': 'Houston, TX',
            'job_type': 'full_time',
            'salary': 82000,
            'requirements': 'PMP certification, 5+ years construction management experience, strong leadership skills.',
            'benefits': 'Company vehicle, performance bonuses, comprehensive insurance, retirement plan'
        }
    ]
    
    for job_data in jobs:
        job, created = Job.objects.get_or_create(
            title=job_data['title'],
            company=job_data['company'],
            defaults=job_data
        )
        if created:
            print(f"✅ Created job: {job.title} at {job.company}")
        else:
            print(f"📝 Job already exists: {job.title}")

def create_sample_educational_programs():
    """Create sample educational programs"""
    programs = [
        {
            'name': 'Computer Science B.S.',
            'institution': 'State University', 
            'program_type': 'undergraduate',
            'duration': '4 years',
            'description': 'Bachelor of Science in Computer Science with focus on software engineering, algorithms, data structures, and computer systems. Prepares students for careers in software development and technology.',
            'tuition_fee': 28000,
            'entry_requirements': 'High school diploma, SAT/ACT scores, mathematics background, personal statement.',
            'location': 'Campus',
            'website': 'https://stateuniversity.edu/cs'
        },
        {
            'name': 'MBA - Master of Business Administration',
            'institution': 'Business School Global',
            'program_type': 'graduate',
            'duration': '2 years',
            'description': 'Comprehensive business administration program with concentrations in finance, marketing, and management. Designed for professionals seeking leadership roles.',
            'tuition_fee': 45000,
            'entry_requirements': 'Bachelor\'s degree, GMAT/GRE scores, 2+ years work experience, letters of recommendation.',
            'location': 'Campus',
            'website': 'https://businessschool.edu/mba'
        },
        {
            'name': 'Data Science Certificate',
            'institution': 'Tech Institute Online',
            'program_type': 'certificate',
            'duration': '6 months',
            'description': 'Intensive certificate program covering data analysis, machine learning, Python programming, and data visualization. Perfect for career changers.',
            'tuition_fee': 12000,
            'entry_requirements': 'Basic programming knowledge, bachelor\'s degree preferred but not required.',
            'location': 'Online',
            'website': 'https://techinstitute.edu/datascience'
        },
        {
            'name': 'Graphic Design Diploma',
            'institution': 'Art and Design College',
            'program_type': 'diploma',
            'duration': '1 year',
            'description': 'Hands-on diploma program focusing on graphic design principles, Adobe Creative Suite, branding, and digital media design.',
            'tuition_fee': 18000,
            'entry_requirements': 'High school diploma, portfolio review, basic computer skills.',
            'location': 'Campus',
            'website': 'https://artcollege.edu/design'
        },
        {
            'name': 'Web Development Bootcamp',
            'institution': 'Code Academy',
            'program_type': 'online',
            'duration': '12 weeks',
            'description': 'Immersive full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and database management.',
            'tuition_fee': 15000,
            'entry_requirements': 'No prior experience required, strong motivation to learn.',
            'location': 'Online',
            'website': 'https://codeacademy.edu/bootcamp'
        }
    ]
    
    for program_data in programs:
        program, created = EducationalProgram.objects.get_or_create(
            name=program_data['name'],
            institution=program_data['institution'],
            defaults=program_data
        )
        if created:
            print(f"✅ Created program: {program.name} - {program.institution}")
        else:
            print(f"📝 Program already exists: {program.name}")

def create_sample_users_and_applications():
    """Create sample users and applications"""
    users_data = [
        {
            'username': 'john_doe',
            'email': 'john.doe@email.com',
            'first_name': 'John',
            'last_name': 'Doe',
            'password': 'password123',
            'user_type': 'job_seeker'
        },
        {
            'username': 'sarah_smith',
            'email': 'sarah.smith@email.com',
            'first_name': 'Sarah',
            'last_name': 'Smith',
            'password': 'password123',
            'user_type': 'student'
        },
        {
            'username': 'mike_johnson',
            'email': 'mike.johnson@email.com',
            'first_name': 'Mike',
            'last_name': 'Johnson',
            'password': 'password123',
            'user_type': 'job_seeker'
        }
    ]
    
    for user_data in users_data:
        user, created = User.objects.get_or_create(
            username=user_data['username'],
            defaults={
                'email': user_data['email'],
                'first_name': user_data['first_name'],
                'last_name': user_data['last_name']
            }
        )
        
        if created:
            user.set_password(user_data['password'])
            user.save()
            
            # Update user profile
            profile = user.userprofile
            profile.user_type = user_data['user_type']
            profile.phone_number = '+1-555-0100'
            profile.bio = f"Experienced {user_data['user_type'].replace('_', ' ').title()} looking for new opportunities."
            profile.save()
            
            print(f"✅ Created user: {user.username} ({user_data['user_type']})")
            
            # Create some applications for this user
            create_sample_applications(user)
        else:
            print(f"📝 User already exists: {user.username}")

def create_sample_applications(user):
    """Create sample applications for a user"""
    jobs = Job.objects.all()[:2]  # Get first 2 jobs
    programs = EducationalProgram.objects.all()[:2]  # Get first 2 programs
    
    # Create job applications
    for job in jobs:
        application, created = Application.objects.get_or_create(
            user=user,
            job=job,
            defaults={
                'application_type': 'job',
                'cover_letter': f"""Dear Hiring Manager,

I am excited to apply for the {job.title} position at {job.company}. With my background and skills, I believe I would be a great fit for your team.

{user.userprofile.bio}

Thank you for considering my application.

Best regards,
{user.first_name} {user.last_name}""",
                'status': 'pending'
            }
        )
        if created:
            print(f"   📄 Created job application: {user.username} -> {job.title}")
    
    # Create program applications
    for program in programs:
        application, created = Application.objects.get_or_create(
            user=user,
            educational_program=program,
            defaults={
                'application_type': 'program',
                'cover_letter': f"""Dear Admissions Committee,

I am writing to express my interest in the {program.name} program at {program.institution}. This program aligns perfectly with my academic and career goals.

{user.userprofile.bio}

I look forward to the opportunity to contribute to your academic community.

Sincerely,
{user.first_name} {user.last_name}""",
                'status': 'pending'
            }
        )
        if created:
            print(f"   🎓 Created program application: {user.username} -> {program.name}")

def main():
    print("🚀 Starting to create sample data for AVS Consultancy...")
    print("=" * 60)
    
    # Create services
    print("\n📊 Creating Services...")
    create_sample_services()
    
    # Create jobs
    print("\n💼 Creating Jobs...")
    create_sample_jobs()
    
    # Create educational programs
    print("\n🎓 Creating Educational Programs...")
    create_sample_educational_programs()
    
    # Create users and applications
    print("\n👥 Creating Users and Applications...")
    create_sample_users_and_applications()
    
    print("\n" + "=" * 60)
    print("🎉 Sample data creation completed!")
    print("\n📊 Summary of created data:")
    print(f"   • Services: {Service.objects.count()}")
    print(f"   • Jobs: {Job.objects.count()}")
    print(f"   • Educational Programs: {EducationalProgram.objects.count()}")
    print(f"   • Users: {User.objects.count()}")
    print(f"   • Applications: {Application.objects.count()}")
    print(f"   • User Profiles: {UserProfile.objects.count()}")
    
    print("\n🌐 You can now access:")
    print("   • Admin panel: http://127.0.0.1:8000/admin/")
    print("   • API Services: http://127.0.0.1:8000/api/services/")
    print("   • API Jobs: http://127.0.0.1:8000/api/jobs/")
    print("   • API Programs: http://127.0.0.1:8000/api/programs/")
    print("   • API Applications: http://127.0.0.1:8000/api/applications/")

if __name__ == '__main__':
    main()