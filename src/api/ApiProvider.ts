import axios from 'axios';
import { ENDPOINTS } from '@/api/EndPoints';

const BASE_URL = '';

export const ApiProvider = {
  getDefaultMap: async () => {
    const url = BASE_URL + ENDPOINTS.GET_DEFAULT_MAP();
    const response = await axios.get(url)
    return response.data.body
  }
}