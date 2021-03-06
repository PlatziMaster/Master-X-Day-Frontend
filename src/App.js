import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import './assets/scss/global.scss'
import Footer from './components/footer';
import Header from './components/header';
import Layout from './components/layout';

import DasboardDetail from './views/dasboard-detail'
import Dashboard from './views/dashboard';


function App() {
  
  return (
    <Fragment>
      <Header/>
      <Layout>
        <Dashboard/>
        {/* <DasboardDetail/> */}
      </Layout>
      <Footer/>
      
    </Fragment>
  );
}

export default App;
