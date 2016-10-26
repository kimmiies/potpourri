var React = require('react');

var NewMovement = React.createClass({
  getInitialState: function() {
    return {
      newDate: new Date().toISOString().substring(0, 10),
      newFrequency: "",
      newType: "",
      newmovementTimeOfDay: ""
    }
  },

  render: function() {
    return <div>
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

        <button onClick={ this.buttonClick }>Add!</button>
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

  // Recieve the prop(function) "onAddMovement" (this.props.nameOfProp) and because it's a function we can pass it in an argument

  buttonClick: function() {
    var newMovement = {
      movementDate: this.state.newDate,
      movementType: this.state.newType,
      movementTimeOfDay: this.state.newmovementTimeOfDay,
      movementFrequency: this.state.newFrequency
    }
    this.props.onAddMovement(newMovement);
    // this.props.functionPassedIn();
  }
})

module.exports = NewMovement;
