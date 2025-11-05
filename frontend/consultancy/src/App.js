// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AbroadMBBS from './pages/AbroadMBBS';
import MBBSCountry from './pages/MBBSCountry';
import Engineering from './pages/Engineering';
import MedicalCourses from './pages/MedicalCourses';
import Management from './pages/Management';
import ArtsScience from './pages/ArtsScience';
import DiplomaCourses from './pages/DiplomaCourses';
import Certification from './pages/Certification';
import AllCourses from './pages/AllCourses';
import Profile from './components/common/Profile';
import ProfileStats from './components/common/ProfileStats';
import Services from './pages/Services';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/abroad-mbbs" element={<AbroadMBBS />} />
            <Route path="/mbbs/:country" element={<MBBSCountry />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/medical-courses" element={<MedicalCourses />} />
            <Route path="/management" element={<Management />} />
            <Route path="/arts-science" element={<ArtsScience />} />
            <Route path="/diploma-courses" element={<DiplomaCourses />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/all-courses" element={<AllCourses />} />
            
            {/* Profile Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-stats" element={<ProfileStats />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;