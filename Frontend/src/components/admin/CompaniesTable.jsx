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

const companies = [
  {
    _id: '1',
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    createdAt: '2024-12-01T10:30:00.000Z',
  },
  {
    _id: '2',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    createdAt: '2024-11-15T08:15:00.000Z',
  },
  {
    _id: '3',
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    createdAt: '2025-01-20T12:00:00.000Z',
  },
  {
    _id: '4',
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    createdAt: '2025-02-05T09:45:00.000Z',
  },
  {
    _id: '5',
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg',
    createdAt: '2025-03-10T14:20:00.000Z',
  },
];

const CompaniesTable = ({ search = "" }) => {
  const navigate = useNavigate();

  const filtered = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
      <Table className="text-lg font-medium text-gray-800">
        <TableCaption className="text-base text-gray-500 py-4">
          List of your recently registered companies
        </TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="px-6 py-4">Logo</TableHead>
            <TableHead className="px-6 py-4">Name</TableHead>
            <TableHead className="px-6 py-4">Created At</TableHead>
            <TableHead className="px-6 py-4 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center py-6 text-gray-500">
                No companies found.
              </TableCell>
            </TableRow>
          ) : (
            filtered.map((company) => (
              <TableRow key={company._id} className="hover:bg-gray-50 transition">
                <TableCell className="px-6 py-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={company.logo} alt={company.name} />
                    <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="px-6 py-4">{company.name}</TableCell>
                <TableCell className="px-6 py-4">
                  {company.createdAt.split('T')[0]}
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <Popover>
                    <PopoverTrigger className="hover:text-primary">
                      <MoreHorizontal className="w-5 h-5" />
                    </PopoverTrigger>
                    <PopoverContent className="w-36 shadow-md border rounded-md p-2">
                      <div
                        onClick={() => navigate(`/admin/companies/${company._id}`)}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
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
