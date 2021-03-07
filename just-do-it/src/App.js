// Import libraries
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import styles
import './App.css';
// Import components
import UserCard from './components/UsersCard/UserCard';
import CenterBoard from './components/CenterBoard/CenterBoard';
import VerticalBar from "./components/VerticalBar/VerticalBar";
import Menu from "./components/Menu-lateral.js/Menu";
import PieChart from "./components/PieChart/PieChart";
// Import actions
import { getBoards, getMembersByBoardId, getListsByBoardId, getCardsByBoardId, getCardsByListId, resetRequest } from './redux/actions/boardActions';

// Component
const App = ({
  getBoards,
  getMembersByBoardId,
  getListsByBoardId,
  getCardsByBoardId,
  getCardsByListId,
  resetRequest,
  boards,
  members,
  lists,
  cardsByBoard,
  cardsByList,
  successRequest,
  errorRequest,
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

  // Get cards by list
  useEffect(() => {
    if (lists[0]) {
      lists.forEach(list => {
        getCardsByListId(list.id);
      })
    }
  }, [lists, getCardsByListId])
  
  if ((successRequest || errorRequest) && loading) {
    setTimeout(() => resetRequest());
    setLoading(false);
  }
  // console.log(cardsByList.length, lists.length);
  return (
    <div className="App">
      <Menu />
      <UserCard members={members} />
      {cardsByBoard[0] ? 
        <div className="centerBoard__container">
          {lists.map((list, i) => 
            <CenterBoard key={i} list={list} cards={cardsByBoard}/>
          )}
        </div>
      : null}
      <section className="graphs">
        <VerticalBar lists={lists} cards={cardsByBoard}/>
        <PieChart lists={lists} cards={cardsByBoard}/>
      </section>
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
  getListsByBoardId(boardId) {
    dispatch(getListsByBoardId({ boardId }))
  },
  getCardsByBoardId(boardId) {
    dispatch(getCardsByBoardId({ boardId }))
  },
  getCardsByListId(listId) {
    dispatch(getCardsByListId({ listId }))
  },
  resetRequest() {
    dispatch(resetRequest());
  },
});

// Map state
const mapStateToProps = (state) => ({
  boards: state.boardReducer.boards,
  members: state.boardReducer.members,
  lists: state.boardReducer.lists,
  cardsByBoard: state.boardReducer.cardsByBoard,
  cardsByList: state.boardReducer.cardsByList,
  errorRequest: state.boardReducer.errorRequest,
  successRequest: state.boardReducer.successRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
