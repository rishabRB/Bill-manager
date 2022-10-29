import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'


function Header() {
  const data = useSelector(state => state.billData.value)
  const [amount,setAmount] = useState(0)
  useEffect(()=>{
    var amounts=[]
    data.map(d=> amounts.push(parseInt(d.amount)))
    var sum = amounts.reduce((a,b)=>a+b)
    setAmount(sum)
  },[data])


  return (
    <header className='shadow-md bg-white sticky top-0 z-50 grid grid-cols-2 p-5 '>
    {/* Left */}
    <div className='relative md:flex h-10 items-center my-auto cursor-pointer'>
        <h1 className='uppercase'>Dash<span className='text-orange-500'>board</span></h1>
    </div>
    {/* Right */}
    <div className='flex items-center justify-end space-x-3'>
      <p>Monthly expense</p>
      <h2 className='text-orange-500'>{amount}</h2>
    </div>
    </header>
  )
}

export default Header