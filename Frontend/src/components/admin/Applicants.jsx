import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import { toast } from "sonner";
import { APPLICATION_API_ENDPOINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";

const Applicants = () => {
  const jobId = useParams().id;
  const dispatch = useDispatch();
  const applicants = useSelector((store) => store.application.allApplicants);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_ENDPOINT}/${jobId}/applicants`, {
          withCredentials: true
        });
        dispatch(setAllApplicants(res.data.job));
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchApplicants();
  }, []);

  return (
    <div className="text-xl">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="font-extrabold text-4xl text-center my-8">
          Applicants ({applicants?.applications?.length || 0})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;
