import React from 'react'
import { useForm } from "react-hook-form";
import {addBill,editBill}  from '../features/billdataSlice'
import { useDispatch, useSelector } from 'react-redux';

function BillCard({showedit,id,handleEdit}) {
  const datas = useSelector(state => state.billData.value)
  const options=[...datas?.map(data => data.category)]
  const { register, handleSubmit,formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = data => {
    if(!showedit) dispatch(addBill(data))
    if(showedit){
        dispatch(editBill({data,id}))
        handleEdit()
    }
  }
  return (
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
            {!showedit ? <h3 className='uppercase text-left m-2 tracking-[2px] text-semibold text-gray-500 '>B<span className='text-orange-300'>il</span>l</h3> : ""}
            {!showedit ? <input
            id='description' 
            {...register('description')}
            className='p-2 border rounded-lg outline-none bg-transparent'
            type="text"
            placeholder='Description' 
             /> : ""}
            <select  {...register('category')} className='p-2 border rounded-lg outline-none '>
            <option value="none" disabled selected>Category</option>
                {options?.map((op,index)=>(
                    <option key={index} value={op}>{op}</option>
                ))}
            </select>
            <input 
            {...register('amount')}
            className='p-2 border rounded-lg outline-none bg-transparent'
            type="text"
            placeholder='Amount' 
             />
            <input 
            {...register('date')}
            className='p-2 border rounded-lg outline-none bg-transparent'
            type="text"
            placeholder='MM-DD-YYYY' 
             />
            <button
            className='p-2 bg-gray-800 text-white  uppercase rounded-md text-sm font-bold'
            >{showedit ? "Edit" : "Add"}</button>
            </form>
  )
}

export default BillCard