import React,{Fragment,Component} from 'react';
import './styles/App.css';
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Card from "./Pages/Card"
import Mine from "./Pages/Mine"
import { HashRouter as Router,  Route } from "react-router-dom";

class App extends Component {
  render() { 
    return ( 
      <Fragment>
        <Router>
          <Route path="/" exact render={(props)=> <Layout {...props}><Home/></Layout>}/>
          <Route path="/Card" render={(props)=> <Layout {...props}><Card/></Layout>}/>
          <Route path="/Mine" render={(props)=> <Layout {...props}><Mine/></Layout>}/>
        </Router>
      </Fragment>
     );
  }
}
 
export default App;