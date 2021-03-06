import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
import Header from './components/header'
import Footer from './components/footer'
import CardContainer from './components/mobile-card-container'

function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
      <Footer />
    </div>
  );
}

export default App;
