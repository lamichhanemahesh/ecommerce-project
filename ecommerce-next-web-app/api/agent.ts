import axios,{AxiosError, AxiosResponse} from 'axios';
import { toast } from "react-toastify";
axios.defaults.baseURL = 'http://localhost:8080/ecommerce/';
const responseBody = (response:AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
    return response;
},(error: AxiosError) => {
    const{data,status} = error.response!;
    switch (status) {
      case 400:
        toast.error(status);
        break;
      case 404:
        toast.error(status);
        break;
      case 401:
        toast.error(status);
        break;
      case 500:
        toast.error(status);
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
})

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string) => axios.post(url).then(responseBody),
  put: (url: string) => axios.put(url).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
}

const catalog = {
    list: () => request.get('product'),
    details: (id: number) => request.get(`product/${id}`)
}



const agent = {
    catalog,

}

export default agent;