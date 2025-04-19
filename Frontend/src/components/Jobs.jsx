import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Jobs = () => {
   
    const {allJobs,searchedQuery} = useSelector(store => store.job);
    const [filteredJobs, setFilteredJobs] = useState(allJobs);
   

    useEffect(()=>{
        if(searchedQuery == "All"){
            setFilteredJobs(allJobs)
        }
        else if (searchedQuery) {
            console.log("searchedQuery: ", searchedQuery);
            const filterJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilteredJobs(filterJobs)
        } else {
            setFilteredJobs(allJobs)
        }
    },[searchedQuery,allJobs])
    
    return (
        <div>
            <Navbar />
            <div className='max-w-[95%] mx-auto mt-8'>
                <div className='flex gap-8'>
                    <div className='w-1/6'>
                        <FilterCard />
                    </div>
                    {
                        filteredJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-8'>
                                    {
                                        filteredJobs.map((job) => (
                                            <Job key={job._id} job={job} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs