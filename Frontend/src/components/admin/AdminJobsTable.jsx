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
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = ({ jobs }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Posted Jobs</h2>
      <Table>
        <TableCaption className="text-xl font-medium text-gray-600 mb-6">
          A list of your recently posted jobs
        </TableCaption>
        <TableHeader>
          <TableRow className="text-2xl font-semibold text-gray-800">
            <TableHead className="text-xl px-8 py-6">Company Name</TableHead>
            <TableHead className="text-xl px-8 py-6">Role</TableHead>
            <TableHead className="text-xl px-8 py-6">Date</TableHead>
            <TableHead className="text-xl px-8 py-6 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <TableRow key={job._id} className="hover:bg-gray-50 transition-all text-lg">
                <TableCell className="px-8 py-6">{job.company?.name}</TableCell>
                <TableCell className="px-8 py-6">{job.title}</TableCell>
                <TableCell className="px-8 py-6">{job.createdAt.split('T')[0]}</TableCell>
                <TableCell className="px-8 py-6 text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="w-6 h-6 cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-4 rounded-xl shadow-md">
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-3 cursor-pointer text-lg hover:text-blue-600"
                      >
                        <Edit2 className="w-5 h-5" />
                        <span>Edit</span>
                      </div>
                      <div
                        onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                        className="flex items-center gap-3 mt-4 cursor-pointer text-lg hover:text-green-600"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-xl py-8">
                No jobs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
