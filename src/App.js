import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
import Header from './components/header'
import Footer from './components/footer'
import Layout from './components/layout'
import Card from './components/mobile-card-container'
import Task from './components/Target'

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout title="Platzi Master Day">
        <Card title="To do" counter="45">
          <Task />
          <Task />
          <Task />
          <Task />
        </Card>
        <Card title="In progress" counter="65">
          <Task />
          <Task />
          <Task />
        </Card>
        <Card title="Done" counter="15">
        <Task />
        </Card>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
