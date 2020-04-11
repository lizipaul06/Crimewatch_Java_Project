import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CrimeContainer from './CrimeContainer'
import NewsContainer from './NewsContainer'
import TableContainer from './TableContainer'
import SafetyTipsContainer from './SafetyTipsContainer'
import MapContainer from './MapContainer'


const MainContainer = () => {

  return(
    <Router>
    <Fragment>
    <NavBar/>
    <MapContainer/>
    <Switch>
    <Route path="/home" component={CrimeContainer}/>
       <Route path="/crimes" component={TableContainer}/>
       <Route path="/news" component={NewsContainer}/>
       <Route path="/safetyTips" component={SafetyTipsContainer}/>
    </Switch>
    </Fragment>
    </Router>
  )
}

export default MainContainer;
