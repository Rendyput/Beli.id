import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 50000
});

const routes = {
    getProducts: () => '/api/store/product',
    getProductById: (id = "") => `/api/store/product?${id}`,
}

export { axiosInstance, routes };