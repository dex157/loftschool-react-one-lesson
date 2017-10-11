import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getHasToken} from 'reducers/auth';

class PrivateRoute extends PureComponent {
  render() {
    const {hasToken, component: Component, ...rest} = this.props;
    return <Route {...rest} render={props => (hasToken ? <Component {...props} /> : <Redirect to="/login" />)} />;
  }
}

export default connect(state => ({hasToken: getHasToken(state)}))(PrivateRoute);
