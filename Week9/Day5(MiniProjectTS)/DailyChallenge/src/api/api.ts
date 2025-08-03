import axios from "axios";

const API_HOST = import.meta.env.VITE_API_URL;;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
    baseURL: `https://${API_HOST}`,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
});

export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url);
    return response.data;
};