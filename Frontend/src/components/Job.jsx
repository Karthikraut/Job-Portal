import React, { useState } from 'react'
import { Button } from './ui/button'
import { Bookmark, SpaceIcon } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }

    
    return (
        <div className='p-6 rounded-xl shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-base text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-3 my-3'>
                <Button className="p-7" variant="outline" size="icon">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-semibold text-xl'>{job?.company?.name}</h1>
                    <p className='text-base text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-2xl my-3'>{job?.title}</h1>
                <p className='text-base text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-3 mt-5'>
                <Badge className={'text-blue-700 font-semibold text-base px-4 py-1'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#6A38C2] font-semibold text-base px-4 py-1'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-green-600 font-semibold text-base px-4 py-1'} variant="ghost">{job?.salary}{job?.salary<100? <span>LPA</span>:<span>Rs per month</span> }</Badge>
            </div>
            <div className='flex items-center gap-4 mt-5'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline" className="text-base">Details</Button>
                <Button className="bg-[#6A38C2] text-base">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job