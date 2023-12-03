import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/devices/`;

// Create New Device
const createDevice = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all devices
const getDevices = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Device
const deleteDevice = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

// Get a Device
const getDevice = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// Update Device
const updateDevice = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const deviceService = {
  createDevice,
  getDevices,
  getDevice,
  deleteDevice,
  updateDevice,
};

export default deviceService;
