import { setAllCompanies} from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompany= () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchJobs = async()=>{
            console.log("fetching jobs from api");
            const res =await axios.get(`${COMPANY_API_ENDPOINT}/get`,{withCredentials: true});
            console.log("result: ",res.data.companies);
            dispatch(setAllCompanies(res.data.companies));
        };

        fetchJobs();
    },[]);
}

export default useGetAllCompany;