import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const user =useSelector((store) => store.auth.user);
    const [formData, setFormData] = useState(user);
    console.log("FomrData",formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                resume: file
            }));
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
                                value={formData.fullname}
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
                                value={formData.email}
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
                                value={formData.phoneNumber}
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
                                value={formData.bio}
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
                                value={formData.skills}
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
