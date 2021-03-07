import React from 'react';
import loadingBar from '../icons/loading_bar.svg';
import '../styles/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <section className="presentation-info">
          <div className="title">
            <h1>TrelloReader</h1>
          </div>
          <div className="slogan">
            <h2> just what you needed </h2>
          </div>
          <figure className="image-container">
            <img src={loadingBar} alt="" className="loading-bar" />
          </figure>
        </section>
      </div>
    );
  }
}

export default Header;
