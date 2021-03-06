import axios from "axios";
export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:21080/"
    : // : "http://localhost:21080/";
      "https://app.vegfood.delivery/";

const client = axios.create({
  baseURL: API_URL,
});
const request = function (options) {
  const onSuccess = function (response) {
    console.debug("Request Successful!", response);
    return response.data;
  };
  const onError = function (error) {
    console.error("Request Failed:", error.config);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error.response || error.message);
  };
  return client(options).then(onSuccess).catch(onError);
};

export { request };
