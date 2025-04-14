import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Navbar from '../shared/Navbar'
import { USER_API_ENDPOINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "student",
        file: ""
    });

    const navigate =useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();    //formdata object
        
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            const result =await axios.post(`${USER_API_ENDPOINT}/register`,formData,{
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            console.log(result)
            if (result.data.success) {
                navigate("/login");
                toast.success(result.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            <Navbar />
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-gray-800">Create Your Account</CardTitle>
                        <CardDescription className="text-center text-lg text-gray-600">
                            Join us to start your journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullname" className="text-base font-medium text-gray-700">Full Name</Label>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-base font-medium text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-base font-medium text-gray-700">Phone Number</Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-base font-medium text-gray-700">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Create a password"
                                    value={input.password}
                                    onChange={changeEventHandler}
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-base font-medium text-gray-700">Role</Label>
                                <div className="flex gap-4">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            checked={input.role === 'student'}
                                            onChange={changeEventHandler}
                                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <Label className="text-base">Student</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="recruiter"
                                            checked={input.role === 'recruiter'}
                                            onChange={changeEventHandler}
                                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <Label className="text-base">Recruiter</Label>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="profileImage" className="text-base font-medium text-gray-700">Profile Picture</Label>
                                <Input
                                    id="profileImage"
                                    name="profileImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={changeFileHandler}
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 cursor-pointer"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                            >
                                Create Account
                            </Button>

                            <div className="text-center text-base text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Signup
