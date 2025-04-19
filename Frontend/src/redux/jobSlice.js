import { createSlice } from "@reduxjs/toolkit";
const jobSlice =createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
        allAdminJob:[],
        allAppliedJobs: []
    },
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJob = action.payload;
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs = action.payload;
        }
    }
})

export const {setAllJobs,setSingleJob,setAllAdminJobs,setAllAppliedJobs} = jobSlice.actions;
export default jobSlice.reducer;