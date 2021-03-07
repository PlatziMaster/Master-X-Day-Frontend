import Card from './components/card'

import menu from './icons/app-menu.svg'
import home from './icons/home.svg'
import table from './icons/table.svg'
import dashb from './icons/dashb.svg'
import star from './icons/star.svg'
import lock from './icons/lock.svg'

import './App.css';

function App() {
  return (
    <div className="App">{/*Dont delete*/}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav ">
              <div className="row">
                  <div className="col-md-3">
                    <li className="nav-item">
                      <button className="btn btn-outline-light"><img src={menu} alt="Menu Icon" /></button>
                    </li>
                  </div>
                  <div className="col-md-3">
                    <li className="nav-item">
                      <button className="btn btn-outline-light"><img src={home} alt="Home Icon" /></button>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li className="nav-item">
                      <button className="btn btn-outline-light"><img src={table} alt="Table Icon" /><span>Boards</span></button>
                    </li>
                  </div>
                </div>
            </ul>
            <form>
              <input className="form-control" placeholder="Go to..." aria-label="Search" />
            </form>
            <a class="navbar-brand" href="#">PlatziTrello</a>
          </div>
      </nav>
      <div className="container-fluid">
        <nav className="navbar">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownTrello" data-bs-toggle="dropdown" aria-expanded="false">Board</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Board 1</a></li>
              <li><a className="dropdown-item" href="#">Board 2</a></li>
              <li><a className="dropdown-item" href="#">Board 3</a></li>
            </ul>
          </div>
          <h3>Trello Clone</h3>
          <button className="btn btn-light"><img src={star} alt="Star Icon" /></button>
          <button className="btn btn-light"><img src={lock} alt="Lock Icon" />Private</button>
          <button className="btn btn-light"><h4>Invite</h4></button>
        </nav>
        <div className="row">
          <Card title="To Do" />
          <Card title="In progress" />
          <Card title="Done" />
        </div>
      </div>
    </div>
  );
}

export default App;
