import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
// import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    const [open,setOpen] = React.useState(false);
    const user =useSelector((store) => store.auth.user);
    // useGetAppliedJobs();
    const userData = {
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        profile: {
            bio: user?.profile?.bio,
            skills: user?.profile?.skills.map((skill)=>skill) || "",
            resume: user?.profile?.resume ,
            resumeOriginalName: user?.profile?.resumeOriginalName ,
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 py-8'>
                <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8'>
                    <div className='flex justify-between items-start'>
                        <div className='flex items-center gap-6'>
                            <Avatar className="h-32 w-32 border-4 border-gray-100">
                                <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                            </Avatar>
                            <div>
                                <h1 className='text-4xl font-bold text-gray-800 mb-2'>{userData.fullname}</h1>
                                <p className='text-lg text-gray-600'>{userData.profile.bio}</p>
                            </div>
                        </div>
                        <Button onClick={()=>setOpen(true)} variant="outline" size="icon">
                            <Pen className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className='mt-8 space-y-4'>
                        <div className='flex items-center gap-3'>
                            <Mail className="h-5 w-5 text-gray-500" />
                            <span className='text-lg text-gray-700'>{userData.email}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Contact className="h-5 w-5 text-gray-500" />
                            <span className='text-lg text-gray-700'>{userData.phoneNumber}</span>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Skills</h2>
                        <div className='flex flex-wrap gap-2'>
                            {userData?.profile?.skills === null ? (
                                <Badge className={'text-base px-4 py-1'} >No Skills Added</Badge>
                            ) : userData.profile.skills.map((skill, index) => (
                                <Badge key={index} className="text-base px-4 py-1">{skill}</Badge>
                            ))
                            }
                        </div>
                    </div>

                    <div className='mt-8'>
                        <Label className="text-xl font-semibold text-gray-800">Resume</Label>
                        <div className="mt-2">
                            <a
                                target='blank'
                                href={userData.profile.resume}
                                className='text-lg text-blue-600 hover:text-blue-700 hover:underline'
                            >
                                {userData.profile.resumeOriginalName}
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8'>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-800'>Applied Jobs</h2>
                            <p className="text-gray-500 mt-1">Track your job applications and their status</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Total Applications:</span>
                            <Badge className="bg-blue-100 text-blue-700 px-3 py-1">3</Badge>
                        </div>
                    </div>
                    <AppliedJobTable />
                </div>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile