import axios from 'axios';

const URL = 'https://api.trello.com';
const key = '66050e2c572e07f079166db1ae85e79d';
const token = '79bfd2df83f0384425e8768165bd3f39bc8e5ba79eabcf8c0ba42ec49076045c';

export const testAPI = async () => {
  try {
    const result = await axios.get(`${URL}/1/boards/6043bc7c1097aa4c08408b1d?key=${key}&token=${token}`);
    return result;
  } catch (error) {
    return error;
  }
};

export const getMembers = async () => {
  try {
    const result = await axios.get(`${URL}/1/members/{id}/organizations?key=${key}&token=${token}`);
    return result;
  } catch (error) {
    return error;
  }
};

export default testAPI;
