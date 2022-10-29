import { createSlice } from '@reduxjs/toolkit'
import data from '../data'

const initialState = {
  value:data,
}

export const billDataSlice = createSlice({
  name: 'billData',
  initialState,
  reducers: {
    addBill:(state,action) => {
       const bill = {id:state.value.length+1,...action.payload}
       console.log(bill)
       state.value.push(bill)
    },
    deleteBill:(state,action)=>{
      console.log(action.payload)
      state.value.splice(action.payload,1);
    },
    editBill:(state,action)=>{
        console.log(action.payload.data)
        state.value[action.payload.id]={...state.value[action.payload.id],...action.payload.data}
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBill,deleteBill,editBill } = billDataSlice.actions

export default billDataSlice.reducer