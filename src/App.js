import React,{useState} from 'react';
import LoginPage from './pages/login-page/LoginPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AccountPage from './pages/account-page/AccountPage';
import RegistrationPage from './pages/registration-page/RegistrationPage';
import Registered from './pages/hospital/Registered';
import Unregistered from './pages/hospital/Unregistered';
import Navbar from './parts/Navbar';
import {SidebarContext} from './helpers/SidebarContext';

function App() {

  const [sidebarToggle,setSidebarToggle]=useState(false);

  const toggleSidebar=()=>{
    setSidebarToggle(!sidebarToggle);
    console.log(sidebarToggle)
  }
  return (
    <div className="App">
     <Router >
     <Navbar toggleSidebar={toggleSidebar}/>
     <SidebarContext.Provider value={{sidebarToggle,setSidebarToggle,toggleSidebar}}>
    <Route exact path="/" component={LoginPage}/>
    <Route path="/account" component={AccountPage}/>
    <Route path="/registration" component={RegistrationPage}/>
    <Route path="/hospitals/registered" component={Registered}/>
    <Route path="/hospitals/unregistered" component={Unregistered}/>
    </SidebarContext.Provider>
        </Router>

    </div>
  );
}

export default App;
