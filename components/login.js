var React = require('react');
var firebase = require('firebase');

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
      mode: 'login',
      error: null
    }
  },

  render: function() {
    return <div>

      <div className='login-option'>
        <label className={ this.state.mode == 'login' ? 'selected' : ''}>
          <input type='radio' value='login' checked={ this.state.mode == 'login' } onChange={ this.setMode } />
          Login
        </label>
        <label className={ this.state.mode == 'signup' ? 'selected' : ''}>
          <input type='radio' value='signup' checked={ this.state.mode == 'signup' } onChange={ this.setMode } />
          Signup
        </label>
      </div>

      <div>
        <label for='email'>Email</label>
        <input type='text' className='form-control' name='email' value={ this.state.email } onChange={ this.setEmail } />
      </div>

      <div>
        <label for='email'>Password</label>
        <input type='password' className='form-control' name='password' value={ this.state.password } onChange={ this.setPassword } />
      </div>

      <div>
        <button onClick={ this.login  }>
          { this.state.mode == 'login' ? "Login" : "Sign Up" }
        </button>
      </div>

    </div>
  },

  setEmail: function(event) {
    this.setState({ email: event.target.value });
  },

  setPassword: function(event) {
    this.setState({ password: event.target.value });
  },

  setMode: function(event) {
    this.setState({ mode: event.target.value });
  },

  login: function() {
    var component = this; // will lose 'this' inside promise

    if (this.state.mode == 'login') {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.email); //props function from parent & Pass it back arguement (email)
      })
      .catch(function(error){
        component.setState({ error: error.message })
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.email);
      })
      .catch(function(error){
        component.setState({ error: error.message })
      })
    }
  },
})

module.exports = Login;
