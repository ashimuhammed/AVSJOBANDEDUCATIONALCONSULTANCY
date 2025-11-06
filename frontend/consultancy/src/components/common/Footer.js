// frontend/src/components/common/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">AVS Jobs&EducationalConsultancy</h3>
            <p className="text-gray-800">
              Your trusted partner for career growth and educational opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-800 hover:text-blue-300">Find Jobs</Link></li>
              <li><Link to="/all-courses" className="text-gray-800 hover:text-blue-400">AbroadCourses Programs</Link></li>
              <li><Link to="/about" className="text-gray-800 hover:text-blue-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-800">
              <li>Job Placement</li>
              <li>Education Counseling</li>
              <li>Career Guidance</li>
              <li>Resume Building</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-800">
              <li>Email: info@avsconsultancy.com</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Address: 123 Business St, City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-800">
          <p>&copy; 2024 AVS Jobs&EducationalConsultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;