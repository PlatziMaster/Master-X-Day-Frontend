import axios from 'axios';

const BASE_URL = 'https://api.trello.com/1';
const KEY = '66050e2c572e07f079166db1ae85e79d';
const TOKEN = '79bfd2df83f0384425e8768165bd3f39bc8e5ba79eabcf8c0ba42ec49076045c';
const AUTH = `key=${KEY}&token=${TOKEN}`;

const GET_LISTS = `${BASE_URL}/boards/6043bc7c1097aa4c08408b1d/lists?${AUTH}`;

interface List {
  id: string;
}

const getListAndCategories = async () => {
  try {
    const { data } = await axios.get(GET_LISTS);

    const listOfCards: object[] = [];
    await Promise.all(data.map(async (list: List) => {
      const cards = await axios.get(`${BASE_URL}/lists/${list.id}/cards?${AUTH}`);
      listOfCards.push({ ...list, cards: cards.data });
    }));

    return listOfCards;
  } catch (error) {
    return error;
  }
};

export default getListAndCategories;
