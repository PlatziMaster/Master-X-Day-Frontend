
import React from 'react';

import  Navbar from './components/navbar';
import  Footer from './components/footer';

import './App.css';
import ListsContainer from './components/ListsContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ListsContainer />
        <Footer />
    </div>
  );
}

export default App;
