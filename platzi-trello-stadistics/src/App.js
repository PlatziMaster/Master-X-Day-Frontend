import React from "react";
import CardList from "./components/CardList";
import CardPercentage from "./components/CardPercentage";
import "./styles/App.css";
import Header from "./components/Header";
import PieChart from "./components/PieChart";

const App = () => {

    const getList = () => {
        fetch("https://api.trello.com/1/boards/6043df7d663af602cf77c881?key=3ecdfc55093cc26752e7056b0834e1e4&token=57a87b374c6043be18dbc60f00962ba3a650c731b54df7f86b83e967becf22ec")
            .then((res)=>res.ok? Promise.resolve(res) : Promise.reject(res))
            .then((res)=>res.json())
            .then((res) => console.log(res))
    }

    getList();

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
