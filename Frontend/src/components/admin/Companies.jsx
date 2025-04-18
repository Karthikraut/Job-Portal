import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import CompaniesTable from "./CompaniesTable.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Companies = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">Manage Companies</h1>
            <p className="text-gray-500 text-lg">Search and manage your registered companies.</p>
          </div>
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className="text-xl h-12 px-6"
          >
            + New Company
          </Button>
        </div>

        <div className="mb-6">
          <Input
            className="text-xl px-6 py-4 h-14 w-full max-w-xl shadow-sm"
            placeholder="Search company by name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <CompaniesTable search={input} />
      </div>
    </div>
  );
};

export default Companies;
