import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs= () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchJobs = async()=>{
            console.log("fetching jobs from api");
            const res =await axios.get(`${JOB_API_ENDPOINT}/getadminJobs`,{withCredentials: true});
            console.log("result: ",res.data.jobs);
            dispatch(setAllAdminJobs(res.data.jobs));
        };

        fetchJobs();
    },[]);
}

export default useGetAllAdminJobs;