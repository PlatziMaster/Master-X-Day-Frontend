import { useContext } from "react";
import { AppContext } from "./context/index";
import Card from "./components/card";
import menu from "./icons/app-menu.svg";
import home from "./icons/home.svg";
import table from "./icons/table.svg";
import dashb from "./icons/dashb.svg";
import star from "./icons/star.svg";
import lock from "./icons/lock.svg";

const App = () => {
  const { list } = useContext(AppContext);

  return (
    <div className="App">
      {/*Dont delete*/}
      <div className="navbar bg-primary">
        <div className="container-fluid">
          <button className="btn btn-light">
            <img src={menu} alt="Menu Icon" />
          </button>
          <button className="btn btn-light">
            <img src={home} alt="Home Icon" />
          </button>
          <button className="btn btn-light">
            <img src={table} alt="Table Icon" />
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="navbar">
          <div className="row">
            <button className="btn btn-light">
              <img src={dashb} alt="Dashboard Icon" />
              Board
            </button>
            <h1>Trello Clone</h1>
            <button className="btn btn-light ml-4">
              <img src={star} alt="Star Icon" />
            </button>
            <button className="btn btn-light ml-4">
              <img src={lock} alt="Lock Icon" />
              Private
            </button>
            <button className="btn btn-light ml-4">
              <h4>Invite</h4>
            </button>
          </div>
        </div>
        <div className="row">
          {
            list && list.map(item => (
              <Card key={item.id} id={item.id} title={item.name} color="rgb(255, 238, 0)" />    
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
