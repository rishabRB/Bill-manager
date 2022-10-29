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
       const bill = {id:state.value.length,...action.payload}
       state.value.push(bill)
    },
    deleteBill:(state,action)=>{
      console.log(action.payload)  
      state.value.splice(action.payload,1);
    },
    editBill:(state,action)=>{
        const id = action.payload.id
        const data = {
            description:state.value[id].description,
            category:action.payload.data.category === "none" ? state.value[id].category : action.payload.data.category,
            amount:action.payload.data.amount ? action.payload.data.amount : state.value[id].amount,
            date:action.payload.data.date ? action.payload.data.date : state.value[id].date, 
        }
        state.value[action.payload.id]=data
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBill,deleteBill,editBill } = billDataSlice.actions

export default billDataSlice.reducer