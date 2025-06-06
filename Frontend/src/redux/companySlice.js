import {createSlice} from '@reduxjs/toolkit';
import { all } from 'axios';
const companySlice = createSlice({
  name: 'company', 
  initialState:{
    singleCompany: null,
    allCompanies: [], //This are all companies that are created by the admin
  },
  reducers:{
    setSingleCompany:(state,action)=>{
        state.singleCompany =action.payload;
    },
    setAllCompanies:(state,action)=>{
        state.allCompanies = action.payload;
    }
  }
})

export const {setSingleCompany,setAllCompanies} = companySlice.actions;

export default companySlice.reducer;