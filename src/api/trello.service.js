import { getRequest } from "../common/request.api";
const key = "f4bfc1312a10f8b61aae1a9254b4e07a";
const token =
  "ccfa841bfb3b0aa714e28fb412191f9199e4e82a07404c6c22e60f188bc25d76";

const getBoardDatails = (idBoard) => {
  return getRequest(`/1/boards/${idBoard}?key=${key}&token=${token}`);
};

const getBoardMembers = (idBoard) => {
  return getRequest(`/1/boards/${idBoard}/members?key=${key}&token=${token}`);
};

const getBoardTotalCards = (idBoard) => {
  return getRequest(`/1/boards/${idBoard}/cards?key=${key}&token=${token}`);
};

const getBoardList = (idBoard) => {
  return getRequest(`/1/boards/${idBoard}/lists?key=${key}&token=${token}`);
};

const getBoardListCards = (idList) => {
  return getRequest(`/1/lists/${idList}/cards?key=${key}&token=${token}`);
};

const boardData = (idBoard) => {
  return getBoardDatails(idBoard).then((data) => {
    return { id: data.id, name: data.name, image: data.prefs.backgroundImage };
  });
};

const members = (idBoard) => {
  return getBoardMembers(idBoard).then((data) =>
    data && data.lenght > 0 ? data.map((item) => item.fullName) : []
  );
};

const totalCardsBoard = (idBoard) => {
  return getBoardTotalCards(idBoard).then((data) => {
    return data && data.lenght > 0
      ? data.reduce((acum, item) => (acum = acum + 1), 0)
      : 0;
  });
};

const lists = (idBoard) => {
    return getBoardList(idBoard)
    .then(data => {
        return data && data.length > 0 ? data.map(item => ({id: item.id, name: item.name})) : []
    })
}

const cardsNumberInList = (idList) => {
    return getBoardListCards(idList)
    .then(data => {
        return data && data.lenght > 0
        ? data.reduce((acum, item) => (acum = acum + 1), 0)
        : 0;
    })
}

export { boardData, members, totalCardsBoard, lists, cardsNumberInList };
