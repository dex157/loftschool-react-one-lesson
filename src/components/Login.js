import React, {PureComponent} from 'react';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChangeInput = event => {
    this.setState({value: event.target.value});
  };

  handleClick = () => {
    const {value} = this.state;
    window.location.replace(
      `https://www.instagram.com/oauth/authorize/?client_id=${value}&redirect_uri=http://lorem-ipsum.online/instagram-valid-redirect&response_type=token`
    );
  };

  render() {
    const {value} = this.state;
    return (
      <div>
        <input placeholder="client id" onChange={this.handleChangeInput} value={value} />
        <button onClick={this.handleClick}>Authorize</button>
      </div>
    );
  }
}

export default Login;
