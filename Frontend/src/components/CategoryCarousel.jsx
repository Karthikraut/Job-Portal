import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Mobile Developer"
]

const CategoryCarousel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate(`/browse?category=${encodeURIComponent(query)}`);
    }

    return (
        <div className="py-12 ">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Popular Job Categories</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="py-4">
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                <div className="p-2">
                                    <Button 
                                        onClick={() => searchJobHandler(cat)} 
                                        className="w-full h-16 text-lg font-medium rounded-xl bg-white hover:bg-[#6A38C2] hover:text-white transition-all duration-300 border-2 border-[#6A38C2] text-[#6A38C2] shadow-md hover:shadow-lg"
                                    >
                                        {cat}
                                    </Button>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel