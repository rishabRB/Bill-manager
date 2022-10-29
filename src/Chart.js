import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { useSelector } from 'react-redux'

function Chart() {
  const billdata = useSelector((state) => state.billData.value)
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December']
  const [barData,setbarData] = useState(new Array(12).fill(0))
  useEffect(()=>{
     billdata?.forEach((bill)=>{
        const arr = barData
        const idx = parseInt(bill.date.split("")[1])-1
        arr[idx]=barData[idx]+bill.amount 
        setbarData(arr)
     })
  },[billdata])
 
  const data = {
    labels,
    datasets:[
        {
            label:"Monthly expense",
            data:barData,
        }
    ]
  }
  return (
    <Bar data={data} />
  )
}

export default Chart