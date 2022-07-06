import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




//Routing
import PrivateRoute from './components/routes/PrivateRoute';

//Pages
// import PrivatePage from './components/pages/PrivatePage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import Dashboard from './components/pages/Dashboard';

// const history = createBrowserHistory()

const App =() => {
  return (
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </Router>
  );
}

export default App;
