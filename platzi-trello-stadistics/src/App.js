import React from "react";
import CardList from "./components/CardList";
import CardPercentage from "./components/CardPercentage";
import "./styles/App.css";
import Header from "./components/Header";
import PieChart from "./components/PieChart";

const App = () => {

    const KEY_API = "3ecdfc55093cc26752e7056b0834e1e4"
    const TOKEN_API = "57a87b374c6043be18dbc60f00962ba3a650c731b54df7f86b83e967becf22ec"
    const idBoard = "6043df7d663af602cf77c881"
    const idListTodo = "6043df7d663af602cf77c882"
    const idListDone = "6043df7d663af602cf77c884"
    const idListProgress = "6043df7d663af602cf77c883"

    const getList = IDList => {
        const urlTodo = `https://api.trello.com/1/lists/${IDList}/cards?key=${KEY_API}&token=${TOKEN_API}`
        fetch(urlTodo)
            .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
            .then((res)=>res.json())
            .then((res) => console.log(res))
    }

    /*const getCardsOfLists = () => {
        fetch(`https://api.trello.com/1/boards/${idBoard}/lists?key=${KEY_API}&token=${TOKEN_API}`)
            .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
            .then((res)=>res.json())
            .then((res) => console.log(res))
    }*/

    getList(idListDone)

    return (
      <div className="Dashboard">
        <div className="Dashboard__header">
          <Header />
        </div>
        <div className="Dashboard__CardList">
          <CardList />
        </div>
        <div className="Dashboard__CardPercentage">
          <CardPercentage />
        </div>
        <div className="Dashboard__PieChart">
          <PieChart />
        </div>
      </div>
  );
};

export default App;
