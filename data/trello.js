const API_KEY = "5dbf0eeac5c2b1ee210e08d3f7402f9a";
const TOKEN =
  "8b05355e3869a07f53a9332b309ea0066596f9297bbc844aa8516a86d375778d";
const BASE_URL = "https://api.trello.com";

const init = async () => {
  let jsonData = [];
  let boards = await fetchData("/1/members/me/boards");
  boards.forEach(async (board) => {
    let jsonBoard = {
      id: board.id,
      name: board.name
    };

    let boardInfo = await getBoardInfo(board);
    jsonBoard.backgroundImage = boardInfo.prefs.backgroundImage;
    let boardMemberships = await getBoardMemberships(board);
    jsonBoard.members = getMembersName(boardMemberships);
    let listInfo = await getListInfo(board);
    jsonBoard.lists = listInfo.length;
    let jsonList = [];
    listInfo.forEach(async (list) => {
      let cardsInfo = await getCardsInfo(list);
      list.numCards = cardsInfo.length;
      list.cardsData = cardsInfo;
      jsonList.push(list);
    });

    jsonBoard.listData = jsonList;

    jsonData.push(jsonBoard);
  });

  return jsonData;
};

const fetchData = (endpoint, query) => {
  return new Promise((resolve, reject) => {
    let apirequest = `${BASE_URL}${endpoint}?key=${API_KEY}&token=${TOKEN}`;
    if (query) {
      apirequest = `${apirequest}&${query}`;
    }

    fetch(apirequest).then((response) => resolve(response.json()));
  });
};

const getBoardInfo = async (board) => {
  let endpoint = `/1/boards/${board.id}`;
  let boardInfo = await fetchData(endpoint);
  return boardInfo;
};

const getListInfo = async (board) => {
  let endpoint = `/1/boards/${board.id}/lists`;
  let listInfo = await fetchData(endpoint);
  return listInfo;
};

const getCardsInfo = async (list) => {
  let endpoint = `/1/lists/${list.id}/cards`;
  let listInfo = await fetchData(endpoint);
  return listInfo;
};

const getBoardMemberships = async (board) => {
  let endpoint = `/1/boards/${board.id}/memberships`;
  let membershipinfo = await fetchData(endpoint, "member=true");
  return membershipinfo;
};

const getMembersName = (boardMemberships) => {
  let jsonMembers = [];
  boardMemberships.forEach((member) => {
    let jsonMember = {
      id: member.idMember,
      name: member.member.fullName,
      avatar: member.member.avatarUrl
    };

    jsonMembers.push(jsonMember);
  });

  return jsonMembers;
};
