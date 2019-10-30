import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from "./components/Navi";
import Homepage from "./pages/HomePage";
import Candidates from "./pages/Candidates";
import CompanyPage from "./pages/CompanyPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard"


function App() {
  
  const [currentUser, setCurrentUser] = useState({});
  
  const onSubmit = (email, password) => {
    setCurrentUser({email, password})
   }

  return (  
 
  <Router>
 <Navi/>
  <Switch>
    <Route path= "/" exact component ={Homepage} />
    <Route path= "/candidates" exact component = {Candidates}/>
    <Route path= "/companypage" exact component = {CompanyPage}/>
    <Route path= "/login" 
    render= {() => <LoginPage onSubmit={onSubmit}/>}/>
    <Route path= "/dashboard" 
    render= {() => <Dashboard currentUser={currentUser}/>}/>
   </Switch>
  </Router>
    );
}

export default App;
