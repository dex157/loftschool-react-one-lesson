import React, {Component} from 'react';
import './App.css';
import Login from 'components/Login';
import TokenSaver from 'components/TokenSaver';
import {withRouter, Switch, Redirect, Route} from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import UserSelf from 'components/UserSelf';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram application</h1>
        </header>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/instagram-valid-redirect" component={TokenSaver} />

          <PrivateRoute path="/users/self" component={UserSelf} />

          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
