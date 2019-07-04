import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import RazasMain from './RazasMain/RazasMain';
import RazaDetail from './RazasMain/RazasDetail';


export default class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <Route exact  path="/razas" component={RazasMain}/>
            <Route exact path="/detail" component={RazaDetail}/>
          </div>

      </Router>
    );

  }
}

