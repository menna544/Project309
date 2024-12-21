import axios from 'axios';

const API_URL = 'http://localhost:4000'; 

export const addProduct = (data) => axios.post(`${API_URL}/addProduct`, data);
export const listProducts = () => axios.get(`${API_URL}/listProduct`);
export const removeProduct = (id) => axios.post(`${API_URL}/removeProduct`, { id });
export const getSingleProduct = (productId) => axios.post(`${API_URL}/singleProduct`, { productId });
