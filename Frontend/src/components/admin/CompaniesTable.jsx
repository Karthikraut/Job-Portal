import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CompaniesTable = ({ search }) => {
  const navigate = useNavigate();
  const { allCompanies } = useSelector((store) => store.company);
  const companies = allCompanies || [];

  const filtered = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <Table className="text-lg font-medium text-gray-800">
        <TableCaption className="text-base text-gray-500 py-4">
          List of your recently registered companies
        </TableCaption>
        <TableHeader className="bg-gray-100 text-xl">
          <TableRow>
            <TableHead className="px-6 py-5">Logo</TableHead>
            <TableHead className="px-6 py-5">Name</TableHead>
            <TableHead className="px-6 py-5">Created At</TableHead>
            <TableHead className="px-6 py-5 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center py-6 text-gray-500 text-lg">
                No companies found.
              </TableCell>
            </TableRow>
          ) : (
            filtered.map((company) => (
              <TableRow
                key={company._id}
                className="hover:bg-gray-50 transition-all duration-200 ease-in-out"
              >
                <TableCell className="px-6 py-5">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={company.logo} alt={company.name} />
                    <AvatarFallback className="text-xl font-semibold">
                      {company.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="px-6 py-5 text-xl font-semibold">
                  {company.name}
                </TableCell>
                <TableCell className="px-6 py-5 text-lg text-gray-600">
                  {company.createdAt.split('T')[0]}
                </TableCell>
                <TableCell className="px-6 py-5 text-right">
                  <Popover>
                    <PopoverTrigger className="hover:text-primary">
                      <MoreHorizontal className="w-6 h-6" />
                    </PopoverTrigger>
                    <PopoverContent className="w-40 shadow-xl border rounded-xl p-2 bg-white">
                      <div
                        onClick={() => navigate(`/admin/companies/${company._id}`)}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer text-base"
                      >
                        <Edit2 className="w-5 h-5" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
