import React from 'react';
import './Login.scss';
import loaderImage from '../../static/images/loader.gif';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: true,
      loading: false
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateButtonState = this.updateButtonState.bind(this);
    this.login = this.login.bind(this);
  }

  updateButtonState() {
    this.setState({ buttonDisabled: (this.state.username === '' || this.state.password === '') });
  }

  updateUsername(event) {
    this.setState({ username: event.target.value }, this.updateButtonState);
  }

  updatePassword(event) {
    this.setState({ password: event.target.value }, this.updateButtonState);
  }

  login() {
    this.setState({
      buttonDisabled: true,
      loading: true
    }, () => this.props.action(this.state.username, this.state.password));
  }

  render() {
    const showLoader = () => {
      if (this.state.loading) {
        return (
          <img className="loader" src={loaderImage} alt="Loading" />
        );
      }
    };

    return (
      <div className="login">
        <input type="text" placeholder="Username" value={this.state.username} onChange={this.updateUsername} />
        <input type="password" placeholder="*******" value={this.state.password} onChange={this.updatePassword} />
        <button type="button" disabled={this.state.buttonDisabled} onClick={this.login}>Login</button>
        {showLoader()}
      </div>
    );
  }
}

Login.propTypes = {
  action: React.PropTypes.func
};

export default Login;
