import React from 'react'
import Navbar from './shared/Navbar';
import Job from './Job';
const randomJobs = [
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
const Browse = () => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className='max-w-[1600px] mx-auto px-6 py-8'>
                <h1 className='text-2xl font-bold text-gray-800 mb-6'>Search Results ({randomJobs.length})</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        randomJobs.map((job) => {
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