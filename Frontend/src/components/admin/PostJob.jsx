import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_ENDPOINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { allCompanies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = allCompanies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_ENDPOINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className='p-10 max-w-4xl border border-gray-300 shadow-2xl rounded-2xl bg-white w-full'>
                    <h1 className='text-2xl font-bold text-center mb-6'>Post a New Job</h1>
                    <div className='grid grid-cols-2 gap-6 text-lg'>
                        <div>
                            <Label className='text-lg'>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>Experience Level</Label>
                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        <div>
                            <Label className='text-lg'>No. of Positions</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="text-lg p-3 my-2"
                            />
                        </div>
                        {
                            allCompanies.length > 0 && (
                                <div className="col-span-2">
                                    <Label className='text-lg mb-1 block'>Select Company</Label>
                                    <Select onValueChange={selectChangeHandler}>
                                        <SelectTrigger className="text-lg w-full p-3">
                                            <SelectValue placeholder="Select a Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    allCompanies.map((company) => (
                                                        <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                                                            {company.name}
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )
                        }
                    </div>
                    {
                        loading ?
                            <Button className="w-full mt-8 text-lg py-6">
                                <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                                Please wait
                            </Button>
                            :
                            <Button type="submit" className="w-full mt-8 text-lg py-6">Post New Job</Button>
                    }
                    {
                        allCompanies.length === 0 && <p className='text-sm text-red-600 font-semibold text-center mt-4'>*Please register a company first before posting jobs</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob;
