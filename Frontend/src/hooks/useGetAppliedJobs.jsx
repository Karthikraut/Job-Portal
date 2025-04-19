import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs= () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchJobs = async()=>{
            console.log("fetching jobs from api");
            const res =await axios.get(`${APPLICATION_API_ENDPOINT}/get`,{withCredentials: true});
            console.log("result: ",res.data);
            dispatch(setAllAppliedJobs(res.data.application));
        };

        fetchJobs();
    },[]);
}

export default useGetAppliedJobs;