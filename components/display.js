var React = require('react');

var Display = React.createClass({
  render: function() {
    return <div>
      <h5>
        Date: { this.props.hello.movementDate },
        Type: { this.props.hello.movementType },
        Frequency: { this.props.hello.movementFrequency },
        When: { this.props.hello.movementTimeOfDay}
      </h5>
    </div>
  }
})

module.exports = Display;
