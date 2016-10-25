var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
var $ = require('jquery');
var moment = require('moment');
import { Chart } from 'react-google-charts'
// import GoogleChart from './googlechart'

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      movements: {},

      newDate: new Date().toISOString().substring(0, 10),
      newFrequency: "",
      newType: "",
      newmovementTimeOfDay: ""
    }
  },

  render: function() {
    var component = this;

    var chartData1 = [['movementDate','movementFrequency']]

    Object.keys(this.state.movements).map(function(id) {
      var movement = component.state.movements[id];

      chartData1.push([moment(movement.movementDate).toDate(), movement.movementFrequency])
      })
      console.log(chartData1);

    var chartData2 = [['movementType','movementFrequency']]

    Object.keys(this.state.movements).map(function(id) {
      var movement = component.state.movements[id];

      chartData2.push([movement.movementType, movement.movementFrequency])
      })
      console.log(chartData2);

    return <div>

        <h1>Hello</h1>
        <h2>You have tracked { Object.keys(this.state.movements).length } movements so far!</h2>

        <div className="display">

        { Object.keys(this.state.movements).map(function(id) {
          var movement = component.state.movements[id]
          return <div className='row' key={ id } >
              <h5>
                Date: { movement.movementDate },
                Type: { movement.movementType },
                Frequency: { movement.movementFrequency },
                When: { movement.movementTimeOfDay}
              </h5>
            </div>
          })}
        </div>


       <Chart
         chartType="BarChart"
         data={chartData1}
         options={{orientation: 'horizontal'}}
         graph_id="BarChart"
         width="100%"
         height="400px"
         legend_toggle
        />

        <Chart
          chartType="BarChart"
          data={chartData2}
          options={{orientation: 'horizontal'}}
          graph_id="BarChart"
          width="100%"
          height="400px"
          legend_toggle
         />

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
    this.setState({ newFrequency: parseInt(event.target.value, 10) });
  },

  setMovementType: function(event) {
    this.setState({ newType: event.target.value });
  },

  setMovementmovementTimeOfDay: function(event) {
    this.setState({ newmovementTimeOfDay: event.target.value });
  },

  addMovement: function() {
    var newMovement = {
      movementDate: this.state.newDate,
      movementType: this.state.newType,
      movementTimeOfDay: this.state.newmovementTimeOfDay,
      movementFrequency: this.state.newFrequency
    }
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
