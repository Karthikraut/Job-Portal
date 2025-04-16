import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Jobs = () => {
   
    const {allJobs} = useSelector(store => store.job);
    
    return (
        <div>
            <Navbar />
            <div className='max-w-[95%] mx-auto mt-8'>
                <div className='flex gap-8'>
                    <div className='w-1/6'>
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-8'>
                                    {
                                        allJobs.map((job) => (
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