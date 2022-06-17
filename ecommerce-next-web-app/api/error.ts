import axios, { AxiosResponse } from "axios";
axios.defaults.baseURL = "http://localhost:8080/error";
const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
};

const TestError = {
  get400Error: () => request.get("/bad-request"),
  get401Error: () => request.get("/unauthorized"),
  get404Error: () => request.get("/not-found"),
  get500Error: () => request.get("/server-error"),
  getValidationError: () => request.get("/validation-error"),
}

const error = {
  TestError,
}
export default error;
