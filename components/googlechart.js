import React from 'react'
import { Chart } from 'react-google-charts'

const GoogleChart = props => {
  return (
    <Chart
      chartType="BarChart"
      data={props.data}
      options={{orientation: props.orientation}}
      graph_id="BarChart"
      width="100%"
      height="400px"
      legend_toggle
     />
  )
}
// 
// export default GoogleChart
