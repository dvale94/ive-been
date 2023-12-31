import axios from 'axios';
import { ENDPOINTS } from '@/api/EndPoints';

const BASE_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export const ApiProvider = {
  getDefaultMap: async () => {
    const url = BASE_URL + ENDPOINTS.GET_DEFAULT_MAP();
    const response = await axios.get(url)
    return response.data.body
  }
}