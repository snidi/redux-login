import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './Components/LandingPages/Home';
import ContactUs from './Components/LandingPages/ContactUs';
import Features from './Components/LandingPages/Features';
import Help from './Components/LandingPages/Help';
import Error from './Components/LandingPages/Error';
import SignIn from './Components/SignIn';
import Dashboard from './features/user/Dashboard';
import Register from './features/user/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './help/PrivateRoute'

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Switch>
        <Route exact path='/' component={ HomePage}/>    
        <Route exact path='/features' component={ Features}/>    
        <Route exact path='/contact_us' component={ ContactUs}/>    
        <Route exact path='/help' component={ Help}/>    
        <Route exact path='/login' component={ SignIn}/>    
        <Route exact path='/Register' component={ Register}/>    
        {/* <Route component={Error} /> */}    
        <Redirect to='/' />
        <PrivateRoute exact component={Dashboard} path='/dashboard' />
      </Switch>
    </>
  );
}

export default App;
