import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={()=> navigate(`/description/${job._id}`)} 
            className='p-7 rounded-xl shadow-lg bg-white border border-gray-100 cursor-pointer hover:shadow-xl hover:border-[#6A38C2]/20 transition-all duration-300'
        >
            <div className='mb-5'>
                <h1 className='font-semibold text-2xl text-gray-800'>Google, India</h1>
                <p className='text-lg text-gray-500 mt-2'>India</p>
            </div>
            <div className='mb-5'>
                <h1 className='font-bold text-3xl text-gray-900 my-4'>MERN Developer</h1>
                <p className='text-lg text-gray-600 line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt similique aut aliquam obcaecati natus dolorum ad placeat dignissimos quo inventore.</p>
            </div>
            <div className='flex items-center gap-4 mt-7'>
                <Badge className={'text-blue-700 font-semibold text-lg px-5 py-2'} variant="ghost">
                    10 Positions
                </Badge>
                <Badge className={'text-[#6A38C2] font-semibold text-lg px-5 py-2'} variant="ghost">
                    Full Time
                </Badge>
                <Badge className={'text-green-600 font-semibold text-lg px-5 py-2'} variant="ghost">
                    24 LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards