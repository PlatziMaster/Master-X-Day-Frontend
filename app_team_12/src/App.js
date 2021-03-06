import 'bootstrap/dist/css/bootstrap.css';
import user from './assets/001-user.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>

      <div className="container">
        <h2>Dashboard</h2>

        <div className="row">
          <div className="col-md-12">
            <h3>Members</h3>
            <ul className="list-user">
              <li>
                <img src={user} alt="User" className="img-user"></img>
                <label>Daniela Vargas</label>
              </li>
              <li>
                <img src={user} alt="User" className="img-user"></img>
                <label>Nestor David Galeana</label>
              </li>
              <li>
                <img src={user} alt="User" className="img-user"></img>
                <label>Ithzamary Vilchis</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="row"> 
          <div className="col-offset-3"></div>
          <h2>Total progress</h2>
        </div>

        <div className="row">
          <div className="total-container">
              
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h3>To do</h3>
            <div className="total-todo">

            </div>
          </div>
          <div className="col-md-4">
            <h3>In Progress</h3>
            <div className="total-progress">
              
            </div>
          </div>
          <div className="col-md-4">
            <h3>Done</h3>
            <div className="total-done">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;