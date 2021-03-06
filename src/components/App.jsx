import '../styles/App.scss';

import AsideBar from './AsideBar';
import Dashboard from './Dashboard';

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
    </div>
  );
}

export default App;
