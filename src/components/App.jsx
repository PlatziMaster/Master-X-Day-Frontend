import '../styles/App.scss';

import AsideBar from './AsideBar';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App-container">
      <Header />
      <div className="App">
        <header>
          <h2>TrelloReader</h2>
        </header>
        <AsideBar>
          hola
        </AsideBar>
        <Dashboard>
          db
        </Dashboard>
      </div>
      <Footer />
    </div>
  );
}

export default App;
