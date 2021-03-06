import axios from "axios";

const urlBackend = "http://localhost:3000";

function managementError(error: any) {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
}

const getRequest = (url: string): Promise<any> => {
  return axios
    .get(`${urlBackend}/${url}`)
    .then((response) => response.data)
    .catch((error) => {
      managementError(error);
    });
};

const deleteRequest = (url: string): Promise<any> => {
  return axios
    .delete(`${urlBackend}/${url}`)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

const postRequest = (url: string, data: any): Promise<any> => {
  return axios
    .post(`${urlBackend}/${url}`, data)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

const putRequest = (url: string, data: any): Promise<any> => {
  return axios
    .put(`${urlBackend}/${url}`, data)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

export { getRequest, postRequest, deleteRequest, putRequest };
