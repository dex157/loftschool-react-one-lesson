import React, {PureComponent} from 'react';
import {addToken} from 'actions/authActions';
import {connect} from 'react-redux';
import {getHasToken} from 'reducers/auth';
import {Redirect} from 'react-router-dom';

class TokenSaver extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const {addToken, location: {hash}} = this.props;
    addToken(hash.replace(/#access_token=/, ''));
  }

  render() {
    const {hasToken} = this.props;
    if (hasToken) {
      return <Redirect to="/users/self" />;
    }
    return null;
  }
}

export default connect(
  state => ({
    hasToken: getHasToken(state)
  }),
  {
    addToken: addToken
  }
)(TokenSaver);
