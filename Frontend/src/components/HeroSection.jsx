import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
  
    const navigate = useNavigate();

    const searchJobHandler = () => {
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] text-2xl'>No. 1 Job Hunt Website</span>
                <h1 className='text-6xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[50%] h-16 shadow-lg border border-gray-200 pl-6 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-lg'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] h-16 px-8">
                        <Search className='h-6 w-6' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection