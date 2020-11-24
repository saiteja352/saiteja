import React from 'react'
import './App.css';
import Header from './components/header'
import Header2 from './components/header2';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Contactus from './components/contactus';
import {Switch,Route,BrowserRouter} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
       <BrowserRouter>
       <Header/>
       <Header2/>
       <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/aboutus" component={Aboutus}/>
       <Route path="/contactus" component={Contactus}/>
       </Switch>
      </BrowserRouter>
    )
  }
}
export default App;