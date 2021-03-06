import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const API_URL = 'https://api.trello.com';
const ID = 'LOmGJfmG';
// const ID = 'lVOFfXSo';
const KEY = '9bd9d6de105c7952b848676d6b28f553';
// const TOKEN = 'e9b67de37b4b0932719ac946b017ed81feb362864d9b0698a04fd2ddc3c68202';

const useBoardLists = () => {
  const { token } = useStateValue();
  const [lists, setLists] = useState();

  useEffect(() => {
    if (!token || token === '') return;
    axios({
      url: `${API_URL}/1/board/${ID}/lists?key=${KEY}&token=${token}`,
      method: 'GET',
    }).then(({ data }) => {
      setLists(data);
    }).catch(() => {
      return;
    });
  }, []);

  return { lists, setLists };
}

export default useBoardLists;