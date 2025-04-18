import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const CompanySetup = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: "",
    });
    const [loading, setLoading] = useState(false);
    const { singleCompany } = useSelector((state) => state.company);
    useGetCompanyById(params.id);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const companyId = params.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_ENDPOINT}/update/${companyId}`, formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/companies");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong while updating company info");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setInput({
            name: singleCompany?.name || "",
            description: singleCompany?.description || "",
            website: singleCompany?.website || "",
            location: singleCompany?.location || "",
            file: "",
        });
    }, [singleCompany]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto p-10 bg-white mt-10 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-10">
                    <Button
                        onClick={() => navigate("/admin/companies")}
                        variant="outline"
                        className="flex items-center gap-2 text-gray-600 text-xl"
                    >
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                    <h1 className="text-4xl font-bold text-gray-800">Edit Company Info</h1>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl">
                    <div>
                        <Label className="text-xl mb-1 block">Company Name</Label>
                        <Input
                            type="text"
                            name="name"
                            className="h-14 text-lg"
                            value={input.name}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div>
                        <Label className="text-xl mb-1 block">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            className="h-14 text-lg"
                            value={input.description}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div>
                        <Label className="text-xl mb-1 block">Website</Label>
                        <Input
                            type="text"
                            name="website"
                            className="h-14 text-lg"
                            value={input.website}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div>
                        <Label className="text-xl mb-1 block">Location</Label>
                        <Input
                            type="text"
                            name="location"
                            className="h-14 text-lg"
                            value={input.location}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <Label className="text-xl mb-2 block">Logo</Label>
                        <Input
                            type="file"
                            name="file"
                            className="h-14 text-lg"
                            accept="image/*"
                            onChange={changeFileHandler}
                        />
                        {singleCompany?.logo && (
                            <div className="mt-4">
                                <p className="text-gray-600 text-sm mb-2">Current Logo:</p>
                                <img
                                    src={singleCompany.logo}
                                    alt="Company Logo"
                                    className="w-28 h-28 object-contain border rounded-lg"
                                />
                            </div>
                        )}
                    </div>

                    <div className="md:col-span-2 mt-6">
                        {loading ? (
                            <Button className="w-full h-16 text-xl" disabled>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Please wait...
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full h-16 text-xl">
                                Update Company Info
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompanySetup;
