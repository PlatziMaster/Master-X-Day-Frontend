import '../styles/App.scss';

import AsideBar from './AsideBar';
import Dashboard from './Dashboard';
import Card from './components/Card';

import toDoIcon from './icons/to-do-list.svg';
import inProgressIcon from './icons/gear.svg'
import doneIcon from './icons/work-done.svg';
import './styles/Card.scss'

function App() {
  return (
    <div className="App">
      <header>
        <h1>TrelloReader</h1>
      </header>
      <AsideBar>
        hola
      </AsideBar>
      <Dashboard>
        db
      </Dashboard>
      <Card taskClassification="To-Do" icon={toDoIcon}/>
      <Card taskClassification="To-Do" icon={inProgressIcon}/>
      <Card taskClassification="To-Do" icon={doneIcon}/>
    </div>
  );
}

export default App;
