import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById= (companyId) => { 
    const dispatch = useDispatch();
    console.log("useGetCompanyById hook called: ",companyId);
    useEffect(()=>{
        const fetchJobs = async()=>{
            console.log("fetching jobs from api");
            const res =await axios.get(`${COMPANY_API_ENDPOINT}/get/${companyId}`,{withCredentials: true});
            console.log("result: ",res.data.company);
            dispatch(setSingleCompany(res.data.company));
        };

        fetchJobs();
    },[]);
}

export default useGetCompanyById;