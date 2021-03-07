import React, { useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext(null);
const { Provider, Consumer } = AppContext;
const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [list, setList] = useState(null)
  const token =
    "2591c49a144a39954f087df2b9b4aa75df66abeca06cef7093b1b19f8673590f";
  const apikey = "6f9d9ad54c1283d5123e04d9b06b50ed";
  const BASE_URL = "https://api.trello.com";

  useEffect(() => {
      axios({
        url: `${BASE_URL}/1/members/me/boards?fields=name,url&key=${apikey}&token=${token}`,
        method: "get",
      })
        .then((res) => {
          setData(res.data);
          getDataForId({ id: res.data[0].id });
        })
        .catch((err) => {
          console.log(err)
        });
  }, []);

  const getDataForId = ({ id }) => {
    console.log("id", id);
    return axios
      .get(
        `https://api.trello.com/1/boards/${id}/lists?key=${apikey}&token=${token}`
      )
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const context = {
    data,
    list
  };

  return <Provider value={context}>{children}</Provider>;
};

export { AppProvider, AppContext, Consumer as AppConsumer };
