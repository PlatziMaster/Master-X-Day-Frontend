import axios from "axios";

const urlBackend = "https://api.trello.com";

function managementError(error) {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
}

const getRequest = (url) => {
  return axios
    .get(`${urlBackend}/${url}`)
    .then((response) => response.data)
    .catch((error) => {
      managementError(error);
    });
};

const deleteRequest = (url) => {
  return axios
    .delete(`${urlBackend}/${url}`)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

const postRequest = (url, data) => {
  return axios
    .post(`${urlBackend}/${url}`, data)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

const putRequest = (url, data) => {
  return axios
    .put(`${urlBackend}/${url}`, data)
    .then((response) => response.data)
    .catch((err) => {
      managementError(err);
    });
};

export { getRequest, postRequest, deleteRequest, putRequest };
