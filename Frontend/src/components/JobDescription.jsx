import React, { use, useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { APPLICATION_API_ENDPOINT, JOB_API_ENDPOINT } from '@/utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';


const JobDescription = () => {
  
  const {user} =useSelector((store) => store.auth);
  const {singleJob} = useSelector((store) => store.job);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`${JOB_API_ENDPOINT}/get/${params.id}`, { withCredentials: true });
      dispatch(setSingleJob(res.data.job))
      console.log(res.data.job);
    }
    fetchJob();
  }, []);
  
  const [isApplied,setIsApplied] = useState(singleJob?.applications?.some((application)=>application.applicant === user?._id)|| false);

  console.log(isApplied);
  console.log(user);
  console.log(singleJob?.applications);

  const applyJobHandler = async () => {
    try {
        const res = await axios.post(`${APPLICATION_API_ENDPOINT}/apply/${params.id}`,{}, {withCredentials:true});
        
        if(res.data.success){
            setIsApplied(true); // Update the local state
            const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
            dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
            toast.success(res.data.message);

        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
}
  return (
    singleJob && (
    <div className='max-w-[80%] mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-3xl'>{singleJob.title}</h1>
          <div className='flex items-center gap-6 mt-7 '>
            <Badge className={'text-blue-700 font-bold text-xl'} variant="ghost">{singleJob.position} Positions</Badge>
            <Badge className={'text-[#F83002] font-bold text-xl'} variant="ghost">{singleJob.jobType}</Badge>
            <Badge className={'text-[#7209b7] font-bold text-xl'} variant="ghost">{singleJob.salary}{singleJob.salary<100? <span> LPA</span>:<span> per month</span>}</Badge>
          </div>
        </div>
        <Button onClick={()=>applyJobHandler()}
          disabled={isApplied}
          className={`rounded-lg text-xl ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>

      <h1 className='border-b-2 border-b-gray-300 font-medium py-4 mt-7 text-xl'>Job Description</h1>
      <div className='my-7 text-xl'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob.title}</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob.location}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob.description}</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob.experience} yrs</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob.salary}LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob.applications.length}</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  )
  );
};

export default JobDescription;
