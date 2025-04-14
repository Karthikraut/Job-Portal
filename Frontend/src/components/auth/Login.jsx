import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Navbar from '../shared/Navbar'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/constant'

const Login = () => {
    const navigate =useNavigate();
    const [input, setInput] = useState({
            email: "",
            password: "",
            role: "student"
        });
    
        const changeEventHandler = (e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
        
    
        const handleSubmit = async (e)=>{
            e.preventDefault();
           try {
             const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                 headers: {
                     "Content-Type": "application/json"
                 },
                 withCredentials: true,
             });
             console.log(res)
             if (res.data.success) {
                 navigate("/");
                 toast.success(res.data.message);
             }
           } catch (error) {
                console.log(error);
                toast.error(error.response?.data?.message || "Login failed. Please try again.");
           }
        }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            <Navbar />
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-gray-800">Welcome Back</CardTitle>
                        <CardDescription className="text-center text-lg text-gray-600">
                            Sign in to continue your journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-base font-medium text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    placeholder="Enter your email"
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-base font-medium text-gray-700">Password</Label>
                                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={input.password}
                                    onChange={changeEventHandler}
                                    placeholder="Enter your password"
                                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-base font-medium text-gray-700">Login as</Label>
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

                            <Button 
                                type="submit" 
                                className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                            >
                                Sign In
                            </Button>

                            <div className="text-center text-base text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                                    Sign up
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Login