import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const user = useSelector((store) => store.auth.user);
    const [inputData, setInputData] = useState(user);
    const dispatch =useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputData(prev => ({
                ...prev,
                file: file
            }));
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData();
        formData.append("fullname", inputData.fullname);
        formData.append("email", inputData.email);
        formData.append("phoneNumber", inputData.phoneNumber);
        formData.append("bio", inputData.bio);
        formData.append("skills", inputData.skills);
        if (inputData.file) {
            formData.append("file", inputData.file);
        }
        try {
            const res = await axios.put(`${USER_API_ENDPOINT}/profile/update`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            console.log(res)
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(setUser(res.data.user));
                setOpen(false);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error(error.response?.data?.message || "Failed to update profile");
        } finally {
            setLoading(false);
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800">Update Your Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullname" className="text-lg font-medium text-gray-700">Full Name</Label>
                            <Input
                                id="fullname"
                                name="fullname"
                                value={inputData.fullname}
                                onChange={handleChange}
                                className="text-lg h-12"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={inputData.email}
                                onChange={handleChange}
                                className="text-lg h-12"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-lg font-medium text-gray-700">Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={inputData.phoneNumber}
                                onChange={handleChange}
                                className="text-lg h-12"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-lg font-medium text-gray-700">Bio</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                value={inputData.bio}
                                onChange={handleChange}
                                className="text-lg min-h-[100px]"
                                placeholder="Tell us about yourself"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills" className="text-lg font-medium text-gray-700">Skills</Label>
                            <Input
                                id="skills"
                                name="skills"
                                value={inputData.skills}
                                onChange={handleChange}
                                className="text-lg h-12"
                                placeholder="Enter your skills (comma separated)"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="resume" className="text-lg font-medium text-gray-700">Resume</Label>
                            <Input
                                id="resume"
                                name="resume"
                                type="file"
                                onChange={handleFileChange}
                                className="text-lg h-12"
                                accept=".pdf,.doc,.docx"
                            />
                        </div>
                    </div>

                    <DialogFooter className="flex gap-4">

                        {loading ? (<Button
                            className="w-full h-12 text-lg px-6 py-2  text-white rounded-md transition-colors duration-200">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait</Button>) :
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg px-6 py-2"
                            >
                                Save Changes
                            </Button>}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateProfileDialog
