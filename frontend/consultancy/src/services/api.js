// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
            refresh: refreshToken,
          });
          
          const newAccessToken = response.data.access;
          localStorage.setItem('access_token', newAccessToken);
          
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          // Redirect to login if refresh fails
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

// API services
export const authService = {
  login: (credentials) => api.post('/token/', credentials),
  register: (userData) => api.post('/users/register/', userData), // FIXED THIS LINE
  refreshToken: (refresh) => api.post('/token/refresh/', { refresh }),
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

export const jobService = {
  getJobs: (params = {}) => api.get('/jobs/', { params }),
  getJob: (id) => api.get(`/jobs/${id}/`),
  getJobsCount: () => api.get('/jobs/count/'),
};

export const programService = {
  getPrograms: (params = {}) => api.get('/programs/', { params }),
  getProgram: (id) => api.get(`/programs/${id}/`),
  getProgramsCount: () => api.get('/programs/count/'),
};

export const serviceService = {
  getServices: () => api.get('/services/'),
};

export const applicationService = {
  getApplications: () => api.get('/applications/'),
  createApplication: (data) => api.post('/applications/', data),
  updateApplication: (id, data) => api.patch(`/applications/${id}/`, data),
  deleteApplication: (id) => api.delete(`/applications/${id}/`),
  getApplicationsCount: () => api.get('/applications/count/'),
};

export const userService = {
  getProfile: () => api.get('/users/profile/'),
  updateProfile: (data) => api.patch('/users/profile/', data),
};

export const homeService = {
  getStats: () => api.get('/home-stats/'),
};

export default api;


