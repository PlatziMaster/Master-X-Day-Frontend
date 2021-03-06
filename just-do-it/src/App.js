// Import libraries
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// Import assets
import logo from "./logo.svg";
// Import styles
import "./App.css";
// Import actions
import { getBoards, resetRequest } from "./redux/actions/boardActions";

import DoughnutChart from "./components/Graphs/Graphs"

const App = ({
  getBoards,
  resetRequest,
  boards,
  successRequest,
  errorRequest,
}) => {
  // Set State
  const [loading, setLoading] = useState(true);

  // Get boards
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  if ((successRequest || errorRequest) && loading) {
    console.log(boards);
    setTimeout(() => resetRequest());
    setLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Team 11</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ready to start
        </a>
      </header>
      <DoughnutChart />
    </div>
  );
};

// Map dispatch
const mapDispatchToProps = (dispatch) => ({
  getBoards() {
    dispatch(getBoards());
  },
  resetRequest() {
    dispatch(resetRequest());
  },
});

// Map state
const mapStateToProps = (state) => ({
  boards: state.boardReducer.boards,
  errorRequest: state.boardReducer.errorRequest,
  successRequest: state.boardReducer.successRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
