import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './app.css';


 
import Navigation from './components/navigation';
import HomePage from './components/Home';
import OtherPage from './components/otherPage'
 
import * as ROUTES from './constants/routes';
 
const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.OTHERPAGE} component={OtherPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);
 
export default App;