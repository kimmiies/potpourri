import React from 'react'
import { Chart } from 'react-google-charts'

var GoogleChart = React.createClass({
  render: function() {
    return <div>
      <Chart
        chartType="BarChart"
        data={this.props.data}
        options={{orientation: this.props.orientation}}
        graph_id="BarChart"
        width="100%"
        height="400px"
        legend_toggle
       />
     </div>
  }
})

module.exports = GoogleChart;
