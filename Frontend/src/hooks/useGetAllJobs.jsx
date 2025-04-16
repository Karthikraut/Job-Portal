import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs= () => { 
    const dispatch = useDispatch();
    console.log("useGetAllJobs hook called");
    useEffect(()=>{
        const fetchJobs = async()=>{
            console.log("fetching jobs from api");
            const res =await axios.get(`${JOB_API_ENDPOINT}/get`,{withCredentials: true});
            console.log(res.data.jobs);
            dispatch(setAllJobs(res.data.jobs));
        };

        fetchJobs();
    },[]);
}

export default useGetAllJobs;