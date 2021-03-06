// Import libraries
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserCard from "./components/UsersCard/UserCard";
// Import assets
// Import styles
import "./App.css";
// Import actions

import {
  getBoards,
  getMembersByBoardId,
  resetRequest,
} from "./redux/actions/boardActions";

import Menu from "./components/Menu-lateral.js/Menu";

const App = ({
  getBoards,
  getMembersByBoardId,
  resetRequest,
  boards,
  members,
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
    setTimeout(() => resetRequest());
    setLoading(false);
  }

  if (boards[0] && loading) {
    getMembersByBoardId(boards[0].id);
  }

  return (
    <div className="App">
      <Menu />
      <UserCard members={members} />
    </div>
  );
};

// Map dispatch
const mapDispatchToProps = (dispatch) => ({
  getBoards() {
    dispatch(getBoards());
  },
  getMembersByBoardId(boardId) {
    dispatch(getMembersByBoardId({ boardId }));
  },
  resetRequest() {
    dispatch(resetRequest());
  },
});

// Map state
const mapStateToProps = (state) => ({
  boards: state.boardReducer.boards,
  members: state.boardReducer.members,
  errorRequest: state.boardReducer.errorRequest,
  successRequest: state.boardReducer.successRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
