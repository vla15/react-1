import React from 'react';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      pwOne: '',
      pwTwo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isPasswordEqual = this.isPasswordEqual.bind(this);
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  convertPasswordToAsteriks(s) {
    let len = s.length;
    let text = '';
    for (var i = 0; i < len; i++) {
      text += '*'
    }
    return text;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isPasswordEqual()) {
      let body = {
        firstname: this.state.first,
        lastname: this.state.last,
        email: this.state.email,
        password: this.state.pwOne
      }
      fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      })
      .then(success => {
        //router goes back to home
        console.log('created a user');
      })
      .catch(err => console.log('errored', err));
    }
  }

  isPasswordEqual() {
    return this.state.pwOne === this.state.pwTwo;
  }

  render() {
    let pwOne = this.convertPasswordToAsteriks(this.state.pwOne);
    let pwTwo = this.convertPasswordToAsteriks(this.state.pwTwo)
    return <div className="signup-container">
        <div>Signup Page</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Firstname
            <input type="text" value={this.state.first} onChange={e => this.handleChange(e, "first")} />
          </div>
          <div>
            Lastname
            <input type="text" value={this.state.last} onChange={e => this.handleChange(e, "last")} />
          </div>
          <div>
            Email
            <input type="text" value={this.state.email} onChange={e => this.handleChange(e, "email")} />
          </div>
          <div>
            Password
            <input type="text" value={pwOne} onChange={e => this.handleChange(e, 'pwOne')} />
          </div>
          <div>
            Confirm Password
            <input type="text" value={pwTwo} onChange={e => this.handleChange(e, 'pwTwo')} />
          </div>
          <button>Submit</button>
        </form>
      </div>;
  }
}

export default SignupComponent;