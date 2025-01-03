import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });

export const fetchCompanies = () => API.get('/companies/');
export const fetchMethods = () => API.get('/methods/');
export const fetchCommunications = () => API.get('/communications/');
export const createCommunication = (data) => API.post('/communications/', data);



export const fetchNotifications = async () => {
    try {
      const response = await apiClient.get("/notifications/");
      return response.data; // Expected: { overdue: [], dueToday: [] }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  };
  
export const fetchCalendarData = async () => {
  try {
    const response = await apiClient.get("/calendar/");
    return response.data; // Expected: [{ date: 'YYYY-MM-DD', type: 'Email', companyName: 'ABC' }]
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

const BASE_URL = 'http://127.0.0.1:8000/api/';



const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your backend API base URL
  timeout: 5000, // Optional: set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});