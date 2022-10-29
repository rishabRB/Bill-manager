import React, { useState } from 'react'
import {PencilIcon,TrashIcon} from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import {deleteBill} from '../features/billdataSlice'
import BillCard from './BillCard'

function Bill({data}) {
    const [showedit,setshowedit] = useState(false)
    const dispatch = useDispatch()
    const handleClick=(id)=>{
        dispatch(deleteBill(id))
    }
    const handleEdit=()=>{
        setshowedit(!showedit)
    }
  return (
    // <div >
        <div className='p-5 border w-[400px] rounded-md space-y-2'>
        <div className='flex items-center justify-between'>
        <h3 className='uppercase text-sm tracking-[2px] mr-1'>Bill's description <span className='text-orange-500'>:</span></h3>
        <p>{data.description}</p>
        </div>
        <div className='flex items-center justify-between '>
        <h3 className='uppercase text-sm tracking-[2px] mr-1'>category <span className='text-orange-500'>:</span></h3>
        <p>{data.category}</p>
        </div>
        <div className='flex items-center justify-between'>
        <h3 className='uppercase text-sm tracking-[2px] mr-1'> date <span className='text-orange-500'>:</span></h3>
        <p>{data.date}</p>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
        <h3 className='uppercase text-sm tracking-[2px] mr-1'>Amount <span className='text-orange-500'>:</span></h3>
        <p className='font-bold'>{data.amount}</p>
        </div>
        <div className='flex items-center  justify-between space-x-2'>
            <TrashIcon onClick={()=>handleClick(data.id)} className='h-6 cursor-pointer'/>
            <PencilIcon onClick={()=>handleEdit(data.id)} className='h-6 text-orange-500 cursor-pointer' />
        </div>
        {showedit ? 
        <div className='p-1'>
        <BillCard id={data.id} showedit={showedit}/> 
        </div>
        : ""}
    </div>
  )
}

export default Bill