import React from 'react'
import { Modal } from 'react-bootstrap';
import Header from '../../header/header.jsx';
import { Link } from 'react-router-dom';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    fetch("localhost:3000/users/signup");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="login-page-container">
          <div>Login Page</div>
          <form onSubmit={this.handleSubmit}>
            <div>Username:</div>
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.handleChange(e, 'username')}
            />
            <div>Password:</div>
            <input
              type="text"
              value={this.state.password}
              onChange={(e) => this.handleChange(e, 'password')}
            />
            <div>
              <button>Submit</button>
            </div>
          </form>
          <Link to="/login">Don't have an account? Sign-up now.</Link>
        </div>
      </div>
    );
  }
}

export default LoginComponent;