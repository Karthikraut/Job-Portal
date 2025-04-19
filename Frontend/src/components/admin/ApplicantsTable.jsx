import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { APPLICATION_API_ENDPOINT } from '@/utils/constant';

const ApplicantsTable = () => {
  const applicants = useSelector((state) => state.application.allApplicants) || [];
  const shortlistingStatus = ['Accepted', 'Rejected'];

  const statusHandler = async (status, id) => {
    try {
        console.log(`Applicant ${id} marked as: ${status}`);
        // Here you would typically make an API call to update the status in your backend
        const res =await axios.put(`${APPLICATION_API_ENDPOINT}/status/${id}/update`, { status }, { withCredentials: true });
        console.log("Update response: ", res.data);
        if (res.data.success) {
            toast.success(res.data.message);
        } else {
            toast.error(res.data.message);
        }
    } catch (error) {
        console.error("Error updating status:", error);
        toast.error("Failed to update status. Please try again.");
    }
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-semibold mb-6 text-center">Applicants Overview</h2>
      <Table className="text-lg">
        <TableCaption className="text-xl font-semibold mt-4 mb-6 text-gray-600">
          A list of users who applied to this job
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-lg px-6 py-4">Full Name</TableHead>
            <TableHead className="text-lg px-6 py-4">Email</TableHead>
            <TableHead className="text-lg px-6 py-4">Contact</TableHead>
            <TableHead className="text-lg px-6 py-4">Resume</TableHead>
            <TableHead className="text-lg px-6 py-4">Date</TableHead>
            <TableHead className="text-lg px-6 py-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.applications?.map((item) => (
            <TableRow key={item._id} className="text-lg hover:bg-gray-50">
              <TableCell className="px-6 py-5">{item.applicant.fullname}</TableCell>
              <TableCell className="px-6 py-5">{item.applicant.email}</TableCell>
              <TableCell className="px-6 py-5">{item.applicant.phoneNumber}</TableCell>
              <TableCell className="px-6 py-5">
                {item.applicant.profile.resume ? (
                  <a
                    className="text-blue-600 font-medium hover:underline"
                    href={item.applicant.profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.applicant.profile.resumeOriginalName}
                  </a>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </TableCell>
              <TableCell className="px-6 py-5">
                {item.applicant.createdAt.split('T')[0]}
              </TableCell>
              <TableCell className="px-6 py-5 text-right">
                <Popover>
                  <PopoverTrigger className="hover:text-blue-600 transition">
                    <MoreHorizontal size={28} />
                  </PopoverTrigger>
                  <PopoverContent className="w-52 p-4 text-lg shadow-md">
                    {shortlistingStatus.map((status, index) => (
                      <div
                        key={index}
                        onClick={() => statusHandler(status, item._id)}
                        className="py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        {status}
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
