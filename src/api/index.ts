import axios from 'axios';

const URL = 'https://api.trello.com';

export const testAPI = () => {
  try {
    const result = axios.get(`${URL}/1/boards/6043bc7c1097aa4c08408b1d?key=${process.env.VUE_APP_NOT_SECRET_CODE}&token=${process.env.ACCOUNT_TRELLO_TOKEN}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default testAPI;
