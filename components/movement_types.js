module.exports = {
  'A': 'Tornado'
}

// in some other filenam
var movementTypes = require('./movementTypes');

this.props.movementType = 'A'

movementTypes[this.props.movementType] // => 'Tornado'


// in new movement
var movementTypes = require('./movementTypes');

return <select>
  { Object.keys(movementTypes).map(function(type) {
    <option value={ type }>{ movementTypes[type] }</option>
  })}
