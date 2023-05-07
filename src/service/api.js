import axios from 'axios'

const BASE_URL = 'http://fakestoreapi.com';

export const getProductsData = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}