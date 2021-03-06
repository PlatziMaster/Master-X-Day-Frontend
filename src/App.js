import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/global.scss'
//compoments
import Footer from './components/footer';
import Header from './components/header';
import Layout from './components/layout';
// views
import DasboardDetail from './views/dasboard-detail'
import Dashboard from './views/dashboard';

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
