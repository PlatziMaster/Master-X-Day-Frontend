import React from "react";
import CardList from "./components/CardList";
import CardPercentage from "./components/CardPercentage";
import "./styles/App.css";
import Header from "./components/Header";
import PieChart from "./components/PieChart";

const App = () => {
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
