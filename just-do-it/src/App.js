// Import libraries
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import styles
import './App.css';
// Import components
import UserCard from './components/UsersCard/UserCard';
// Import actions
import { getBoards, getMembersByBoardId, getListsByBoardId, getCardsByBoardId, resetRequest } from './redux/actions/boardActions';

// Component
const App = ({
  getBoards,
  getMembersByBoardId,
  getListsByBoardId,
  getCardsByBoardId,
  resetRequest,
  boards,
  members,
  lists,
  cardsByBoard,
  successRequest,
  errorRequest
}) => {
  // Set State
  const [loading, setLoading] = useState(true);

  // Get boards
  useEffect(() => {
    getBoards();
  }, [getBoards])

  // Get members, lists and cards by board id
  useEffect(() => {
    if (boards[0]) {
      getMembersByBoardId(boards[0].id);
      getListsByBoardId(boards[0].id);
      getCardsByBoardId(boards[0].id);
    }
  }, [boards, getMembersByBoardId, getListsByBoardId, getCardsByBoardId])
  
  if ((successRequest || errorRequest) && loading) {
    setTimeout(() => resetRequest());
    setLoading(false);
  }

  return (
    <div className="App">
      <UserCard members={members} />
    </div>
  );
}

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getBoards() {
    dispatch(getBoards())
  },
  getMembersByBoardId(boardId) {
    dispatch(getMembersByBoardId({ boardId }))
  },
  getListsByBoardId(boardId) {
    dispatch(getListsByBoardId({ boardId }))
  },
  getCardsByBoardId(boardId) {
    dispatch(getCardsByBoardId({ boardId }))
  },
  resetRequest() {
    dispatch(resetRequest())
  }
});

// Map state
const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  members: state.boardReducer.members,
  lists: state.boardReducer.lists,
  cardsByBoard: state.boardReducer.cardsByBoard,
  errorRequest: state.boardReducer.errorRequest,
  successRequest: state.boardReducer.successRequest
});

export default connect(mapStateToProps, mapDispatchToProps)(App);