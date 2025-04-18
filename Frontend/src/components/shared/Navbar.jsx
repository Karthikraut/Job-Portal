import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../Profile";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
    const fallbackProfile =
        "https://i.pinimg.com/originals/5c/95/31/5c9531d05f919414e9dff0c974388f67.jpg";
    const user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_ENDPOINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(setUser(null));
                navigate("/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong while logging out");
        }
    }
    return (
        <div className='bg-white shadow-sm'>
            <div className='max-w-[95%] mx-auto h-20 flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>Job<span className='text-[#6A38C2]'>Hunt</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex text-xl items-center gap-8'>
                        {
                            user && user.role == "recruiter" ? (
                                <>
                                    <li><Link to="/admin/companies" className="hover:text-[#6A38C2] transition-colors">Companies</Link></li>
                                    <li><Link to="/admin/jobs" className="hover:text-[#6A38C2] transition-colors" >Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="hover:text-[#6A38C2] transition-colors">Home</Link></li>
                                    <li><Link to="/jobs" className="hover:text-[#6A38C2] transition-colors">Jobs</Link></li>
                                    <li><Link to="/browse" className="hover:text-[#6A38C2] transition-colors">Browse</Link></li>
                                </>
                            )
                        }

                    </ul>
                    {user == null ?
                        (
                            <div className='flex items-center gap-4'>
                                <Link to="/login">
                                    <Button variant="outline" className="text-lg px-6">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-lg px-6">Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer w-12 h-12">
                                        <AvatarImage
                                            src={
                                                user?.profile?.profilePhoto?.trim()
                                                    ? user.profile.profilePhoto
                                                    : fallbackProfile
                                            }
                                        />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className='p-4'>
                                        <div className='flex gap-3 items-center mb-4'>
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage
                                                    src={
                                                        user?.profile?.profilePhoto?.trim()
                                                            ? user.profile.profilePhoto
                                                            : fallbackProfile
                                                    }
                                                />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-semibold text-lg'>{user.fullname}</h4>
                                                <p className='text-base text-gray-500'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        {
                                            user.role == 'student' ?
                                                <div className='flex items-center gap-3 cursor-pointer text-lg mb-3'>
                                                    <User2 className="w-5 h-5" />
                                                    <Button variant="link" className="text-lg"><Link to='/profile'>View Profile</Link></Button>
                                                </div> : <></>
                                        }
                                        <div className='flex items-center gap-3 cursor-pointer text-lg'>
                                            <LogOut className="w-5 h-5" />
                                            <Button onClick={logOutHandler} variant="link" className="text-lg">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
