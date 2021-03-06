import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
import Header from './components/header'
import Footer from './components/footer'
import Layout from './components/layout'
import Card from './components/mobile-card-container'

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout title="Platzi Master Day">
        <Card title="To do" counter="45"/>
        <Card title="In progress" counter="65"/>
        <Card title="Done" counter="15"/>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
