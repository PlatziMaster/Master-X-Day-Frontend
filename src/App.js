import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
import Header from './components/header'
import Footer from './components/footer'
import Layout from './components/layout'
import Main from './components/Main'
import Interface from './components/interface'
import Dashboard from './views/dashboard'
import DasboardDetail from './views/dasboard-detail'



function App() {
  return (
    <Router>
      <Header/>
      <Layout>
        <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard/:id" component={DasboardDetail} />
          </Switch>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
