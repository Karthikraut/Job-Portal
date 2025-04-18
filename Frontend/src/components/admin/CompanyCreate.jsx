import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_ENDPOINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setSingleCompany } from '@/redux/companySlice';
import { useDispatch } from 'react-redux';

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerCompany = async () => {
    if (!companyName.trim()) {
      return toast.error("Company name cannot be empty");
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating company");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 bg-white p-10 rounded-2xl shadow-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Name Your Company</h1>
          <p className="text-gray-500 text-lg">
            What would you like to name your company? Don’t worry — you can change this later.
          </p>
        </div>

        <Label className="text-xl mb-2 block">Company Name</Label>
        <Input
          type="text"
          className="text-xl py-4 px-6 h-14 mb-6"
          placeholder="JobHunt, Microsoft etc."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className="flex items-center gap-4">
          <Link to="/admin/companies">
            <Button variant="outline" className="text-xl h-12 px-6">Cancel</Button>
          </Link>
          <Button className="text-xl h-12 px-8" onClick={registerCompany} disabled={loading}>
            {loading ? "Creating..." : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
