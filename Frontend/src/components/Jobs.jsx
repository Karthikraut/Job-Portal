import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { Outlet } from 'react-router-dom';

const jobsArray = [
    {
        _id: "1",
        title: "Senior Frontend Developer",
        description: "Looking for an experienced frontend developer with React expertise",
        company: {
            name: "Tech Solutions Inc",
            logo: "https://via.placeholder.com/50"
        },
        position: 2,
        jobType: "Full Time",
        salary: 15,
        createdAt: new Date()
    },
    {
        _id: "2",
        title: "Backend Engineer",
        description: "Seeking a skilled backend developer with Node.js experience",
        company: {
            name: "Digital Innovations",
            logo: "https://via.placeholder.com/50"
        },
        position: 3,
        jobType: "Full Time",
        salary: 12,
        createdAt: new Date()
    }
];

const Jobs = () => {
    const [filterJobs, setFilterJobs] = useState(jobsArray);

    return (
        <div>
            <Navbar />
            <div className='max-w-[95%] mx-auto mt-8'>
                <div className='flex gap-8'>
                    <div className='w-1/6'>
                        <FilterCard />
                    </div>
                    {
                        jobsArray.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-8'>
                                    {
                                        jobsArray.map((job) => (
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