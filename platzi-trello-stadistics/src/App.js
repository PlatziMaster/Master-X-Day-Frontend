import React from 'react'
import CardList from './components/CardList'
import CardPercentage from './components/CardPercentage'
import "./styles/App.css"
import ApexChart from "./components/PieChart";
import Header from "./components/Header";

const App = () => {
  return (
    <>
        <Header/>
        <CardList  />
        <ApexChart/>
        <CardPercentage />
    </>
  )
}

export default App
