import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4001",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add addtional loggin here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
