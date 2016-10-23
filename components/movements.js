var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
var $ = require('jquery');
import GoogleChart from './googlechart'

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      movements: [
        { movementDate: "2016-01-01", movementType: "Torpedo", movementTimeOfDay: "Morning", movementFrequency: 6 },
        { movementDate: "2016-01-02", movementType: "Torpedo", movementTimeOfDay: "Afternoon", movementFrequency: 3 },
      ],

      newDate: new Date().toISOString().substring(0, 10),
      newFrequency: "",
      newType: "",
      newmovementTimeOfDay: ""
    }
  },

  render: function() {
    var component = this;

    return <div>
        <h1>Hello</h1>
        <h2>You have tracked { this.state.movements.length } movements so far!</h2>

        <div className="display">
        
          { this.state.movements.map(function(movement, i){

            return <div className='row' key={ i } >
              <h5>
                movementDate: { movement.movementDate },
                movementType: { movement.movementType },
                movementFrequency: {movement.movementFrequency },
                When: { movement.movementTimeOfDay}
              </h5>
            </div>
          })}
        </div>

        <div className="tracker">

          <label>Todays Date:</label>
            <input type="date" name="date-tracker" value={ this.state.newDate } onChange={ this.setMovementDate } />

          <label>Number of Times:</label>
            <input type="number" name="movementFrequency-tracker" min="1" max="20" value={ this.state.newFrequency } onChange={ this.setMovementFrequency } />

          <label>Choose Your Movement:</label>
          <select name="poop-tracker" id="poop-tracker-selector" value={ this.state.newType } onChange={ this.setMovementType }>
              <option value="">- Please Select -</option>
              <option value="A">Torpedo</option>
              <option value="B">Blue</option>
              <option value="C">Green</option>
              <option value="D">Purple</option>
              <option value="E">Pink</option>
              <option value="F">Orange</option>
              <option value="G">Yellow</option>
              <option value="H">Red</option>
            </select>

          <label>Time of Day:</label>
            <select name="movementTimeOfDay-tracker" id="movementTimeOfDay-tracker-selector" value={ this.state.newmovementTimeOfDay } onChange={ this.setMovementmovementTimeOfDay }>
              <option value="">- Please Select -</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>

          <button onClick={ this.addMovement }>Add!</button>
        </div>
      </div>
  },

  setMovementDate: function(event) {
    //console.log('setMovementDate', event.target.value)
    this.setState({ newDate: event.target.value });
  },

  setMovementFrequency: function(event) {
    this.setState({ newFrequency: event.target.value });
  },

  setMovementType: function(event) {
    this.setState({ newType: event.target.value });
  },

  setMovementmovementTimeOfDay: function(event) {
    this.setState({ newmovementTimeOfDay: event.target.value });
  },

  // addMovement: function() {
  //   // console.log('newDate=', this.state.newDate)
  //   // console.log('newFrequency=', this.state.newFrequency);
  //   // console.log('newType=', this.state.newType)
  //   // console.log('newmovementTimeOfDay=', this.state.newmovementTimeOfDay);
  //   var movements = this.state.movements.concat({
  //     movementDate: this.state.newDate,
  //     movementType: this.state.newType,
  //     movementTimeOfDay: this.state.newmovementTimeOfDay,
  //     movementFrequency: this.state.newFrequency
  //   });
  //   this.setState({ movements: movements });
  // },

  // addMovement: function() {
  //   var newMovement = {
  //     movementDate: this.state.newDate,
  //     movementType: this.state.newType,
  //     movementTimeOfDay: this.state.newmovementTimeOfDay,
  //     movementFrequency: this.state.newFrequency
  //   }
  //   // structuring data you want to put into database/building the structure of what you want to send
  //   console.log("New Movement=", newMovement); // Your current message
  //
  //   var newState = this.state.movements;
  //   console.log("New State/Message before=", newState);  // All the messages before you made the post to firebase (firebase doesn't know its connected to your app)
  //
  //   $.ajax({
  //     url: "https://potpourri-1ba61.firebaseio.com/movements.json",
  //     method: "POST",        // creates new key
  //     data: JSON.stringify(newMovement),
  //     success: function(data){
  //       newState[data.name] = newMovement; //target that new specific key and set the values of it with (newMessage)
  //       this.setState({ movements: newState });
  //     }.bind(this)
  //   })
  // },

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