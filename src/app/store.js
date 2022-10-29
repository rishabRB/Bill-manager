import { configureStore } from '@reduxjs/toolkit'
import  billDataReducer  from '../features/billdataSlice'

export const store = configureStore({
  reducer: {
    billData:billDataReducer,
  },
})