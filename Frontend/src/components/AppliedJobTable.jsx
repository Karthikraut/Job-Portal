import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { Calendar, Building2, Briefcase } from 'lucide-react'

const AppliedJobTable = () => {
    const appliedJobs = [
        {
            _id: "1",
            createdAt: "2024-03-15",
            job: {
                title: "Senior Frontend Developer",
                jobType: "Full Time",
                company: {
                    name: "Tech Solutions Inc"
                }
            },
            status: "pending"
        },
        {
            _id: "2",
            createdAt: "2024-03-10",
            job: {
                title: "Backend Engineer",
                jobType: "Full Time",
                company: {
                    name: "Digital Innovations"
                }
            },
            status: "accepted"
        },
        {
            _id: "3",
            createdAt: "2024-03-05",
            job: {
                title: "Full Stack Developer",
                jobType: "Contract",
                company: {
                    name: "WebCraft Studios"
                }
            },
            status: "rejected"
        }
    ];
    
    return (
        <div className="mt-6">
            <Table className="border rounded-lg overflow-hidden">
                <TableCaption className="text-2xl font-semibold text-gray-800 mb-6">Your Job Applications History</TableCaption>
                <TableHeader className="bg-gray-50">
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="font-semibold text-gray-700 text-lg">Date Applied</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-lg">Job Details</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-lg">Company</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-lg text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appliedJobs.map((appliedJob) => (
                        <TableRow key={appliedJob._id} className="hover:bg-gray-50">
                            <TableCell className="py-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-700 text-lg">{appliedJob.createdAt}</span>
                                </div>
                            </TableCell>
                            <TableCell className="py-4">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-900 text-lg">{appliedJob.job.title}</span>
                                    <span className="text-gray-500 text-base">{appliedJob.job.jobType}</span>
                                </div>
                            </TableCell>
                            <TableCell className="py-4">
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-700 text-lg">{appliedJob.job.company.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="py-4 text-right">
                                <Badge 
                                    className={`
                                        px-4 py-1.5 text-base font-medium
                                        ${appliedJob.status === "rejected" 
                                            ? 'bg-red-100 text-red-700' 
                                            : appliedJob.status === 'pending' 
                                                ? 'bg-yellow-100 text-yellow-700' 
                                                : 'bg-green-100 text-green-700'
                                        }
                                    `}
                                >
                                    {appliedJob.status.charAt(0).toUpperCase() + appliedJob.status.slice(1)}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable