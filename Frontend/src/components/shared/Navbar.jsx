import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = true;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto w-7xl h-16'>
                <div>
                    <h1 className='text-4xl font-bold'>Job<span className='text-[#F83002]'>Hunt</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex text-2xl items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {user ?
                        (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover className='' >
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer w-15 h-15">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>

                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className=''>
                                        <div className='flex gap-2 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Karthik Raut</h4>
                                                <p className='text-sm text-muted-foreground'>Full stack Developer</p>
                                            </div>

                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer text-xl'>
                                            <User2 />
                                            <Button variant="link">View Profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>)}
                </div>
            </div>

        </div>
    )
}

export default Navbar;
