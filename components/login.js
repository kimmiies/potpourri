var React = require('react');
var firebase = require('firebase');
import { browserHistory } from 'react-router';

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
      mode: 'login',
      name: '',
      error: null
    }
  },

  render: function() {
    return  <div>
      { this.state.error ? <div>{ this.state.error }</div> : null }
      <div>
        <label>
          <input type='radio' value='login' checked={ this.state.mode == 'login' } onChange={ this.setMode } />
          Login
        </label>
        <label>
          <input type='radio' value='signup' checked={ this.state.mode == 'signup' } onChange={ this.setMode } />
          Signup
        </label>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={ this.state.email } onChange={ this.setEmail } />
      </div>
      { this.state.mode == 'signup' ?
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={ this.state.name } onChange={ this.setName } />
        </div> :
        null
      }
      <div>
        <label htmlFor='email'>Password</label>
        <input type='password' name='password' value={ this.state.password } onChange={ this.setPassword } />
      </div>
      <div>
        <button onClick={ this.login }>Login</button>
      </div>
    </div>
  },

  setEmail: function(event) {
    this.setState({ email: event.target.value });
  },

  setPassword: function(event) {
    this.setState({ password: event.target.value });
  },

  setName: function(event) {
    this.setState({ name: event.target.value });
  },

  setMode: function(event) {
    this.setState({ mode: event.target.value });
  },

  login: function() {
    // We're attaching an event handler to this button in the child component.
    // This event handler has been passed props from parent to communicate information between the two
    //  The props in this case is function LoginParent, takes email as argument and sets state to of logginIN to true and current user to email

    var component = this; // will lose 'this' inside promise

    if (this.state.mode == 'login') {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.name); //props function from parent & Pass it back arguement (name)

        browserHistory.push('/');
      })
      .catch(function(error){
        console.log( error.message );
        component.setState({ error: error.message })
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        component.props.onLogin(component.state.email);
      })
      .catch(function(error){
        console.log( error.message );
        component.setState({ error: error.message })
      })
    }
  },
})

module.exports = Login;
