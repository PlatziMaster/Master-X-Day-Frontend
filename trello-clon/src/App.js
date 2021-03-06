import Card from './components/card'
import menu from './icons/app-menu.svg'
import home from './icons/home.svg'
import table from './icons/table.svg'
import dashb from './icons/dashb.svg'
import star from './icons/star.svg'
import lock from './icons/lock.svg'
import "./App.css"

function App() {
  return (
    <div className="App">{/*Dont delete*/}
      <div className="navbar bg-primary" >
        <div className="container-fluid">
          <button className="btn btn-light aa"><img src={menu} alt="Menu Icon"/></button>
          <button className="btn btn-light"><img src={home} alt="Home Icon"/></button>
          <button className="btn btn-light"><img src={table} alt="Table Icon"/></button>
          </div>
        </div>
      <div className="container-fluid">
        <div className="navbar">
          <button className="btn btn-light"><img src={dashb} alt="Dashboard Icon"/>Board</button>
          <h3 className="aa">Board Titles</h3>
          <button className="btn btn-light"><img src={star} alt="Star Icon"/></button>
          <button className="btn btn-light"><img src={lock} alt="Lock Icon"/>Private</button>
          <button className="btn btn-light"><h4>Invite</h4></button>
        </div>
        <div className="row">
            <Card title="To Do"/>
            <Card title="In progress"/>
            <Card title="Done"/>
        </div>
      </div>
    </div>
  );
}

export default App;
