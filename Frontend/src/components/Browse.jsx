import React, { useEffect } from 'react'
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const Browse = () => {
    const {allJobs} = useSelector((store) => store.job);
    const dispatch =useDispatch();

    useEffect(() => {
        return ()=>{
            dispatch(setSearchedQuery(""))
        }
    })
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className='max-w-[1600px] mx-auto px-6 py-8'>
                <h1 className='text-2xl font-bold text-gray-800 mb-6'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse;