import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function Chart() {
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
  const data = {
    labels,
    datasets:[
        {
            label:"Monthly expense",
            data:[400,500,44,33,600,32,33]
        }
    ]
  }
  return (
    <Bar data={data} />
  )
}

export default Chart