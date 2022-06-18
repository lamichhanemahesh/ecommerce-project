import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";


axios.defaults.baseURL = "http://localhost:8080/error";
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 400) {
      toast.error(error.response.data.message);
    }
    if (error.response!.status === 401) {
      toast.error(error.response.data.message);
    }
    if (error.response!.status === 404) {
      toast.error(error.response.data.message);
    }
    if (error.response.status === 500) {
      toast.error(error.response.data.message);
    }
    if (error.response.status === 406) {
      toast.error(error.response.data.message);
    }
    return Promise.reject(error.response!);
  }
);


const request = {
  get: (url: string) => axios.get(url).then(responseBody),
};

const TestError = {
  get400Error: () => request.get("/bad-request"),
  get401Error: () => request.get("/unauthorized"),
  get404Error: () => request.get("/not-found"),
  get500Error: () => request.get("/server-error"),
  getValidationError: () => request.get("/validation-error"),
};

const error = {
  TestError,
}
export default error;

