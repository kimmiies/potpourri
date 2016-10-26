var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
var $ = require('jquery');
var moment = require('moment');
var Display = require('./display');
var NewMovement = require('./new_movement');
var Login = require('./login');
import GoogleChart from './googlechart'

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      movements: {},
      currentUser: "Kimmiies",
      loggedIn: false
    }
  },

  render: function() {
    if (!this.state.loggedIn) {
      console.log(Login);
      return <Login onLogin={ this.loginParent }/>
    } else {

    var component = this;

    var chartData = [['movementType','movementFrequency']]

    Object.keys(this.state.movements).map(function(id) {
      var movement = component.state.movements[id];
      chartData.push([movement.movementType, movement.movementFrequency])
      })
      console.log(chartData);

    return <div>

      <h1>Welcome, { this.state.currentUser }</h1>

      <h2>You have tracked { Object.keys(this.state.movements).length } movements so far!</h2>

      <div className="display">
        { Object.keys(this.state.movements).map(function(id) {
          var movement = component.state.movements[id]
          return <div className='row' key={ id } >
              <Display hello={movement}/>
            </div>
          })}
      </div>

      <GoogleChart
          data={chartData}
          orientation={'horizontal'}
          />

      <NewMovement onAddMovement={ this.addMovement } />

    </div>
    }
  },

  // Pass a prop to our child component New Movement. The prop is a function that's available on parent component (this.addMovement) and we're going to pass it down as onAddMovement
  loginParent: function(email) {
    this.setState({loggedIn: true, currentUser: email })
  },

  addMovement: function(newMovement) {
    // structuring data you want to put into database/building the structure of what you want to send
    console.log("New Movement=", newMovement); // Your current message

    var newState = this.state.movements;
    console.log("New State/Message before=", newState);  // All the messages before you made the post to firebase (firebase doesn't know its connected to your app)

    $.ajax({
      url: "https://potpourri-1ba61.firebaseio.com/movements.json",
      method: "POST",        // creates new key
      data: JSON.stringify(newMovement),
      success: function(data){
        newState[data.name] = newMovement; //target that new specific key and set the values of it with (newMessage)
        this.setState({ movements: newState });
      }.bind(this)
    })
  },

  componentDidMount: function() {
    $.ajax({
        url: "https://potpourri-1ba61.firebaseio.com/movements.json",
        method: "GET",
        success: function(data){
          console.log(data);
          this.setState({ movements: data });
        }.bind(this)
    })
  }
});


module.exports = MyComponent;
