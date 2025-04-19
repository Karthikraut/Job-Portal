import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import AdminJobsTable from './AdminJobsTable';
import { useSelector } from 'react-redux';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';

const AdminJobs = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    useGetAllAdminJobs();

    const {allAdminJob} = useSelector((state) => state.job) ;
    

    const filteredJobs = allAdminJob.filter((job) =>
        job.company.name.toLowerCase().includes(input.toLowerCase()) ||
        job.title.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-[350px] text-xl px-6 py-4"
                        placeholder="Filter by name, role"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={() => navigate('/admin/jobs/create')}
                        className="text-xl px-8 py-4"
                    >
                        New Job
                    </Button>
                </div>
                <AdminJobsTable jobs={filteredJobs} />
            </div>
        </div>
    );
};

export default AdminJobs;
