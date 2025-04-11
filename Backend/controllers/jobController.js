import { Job } from "../models/jobModel.js";
// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
export const getAllJobs = async (req, res) => {
    try {
        // Get the 'keyword' from the query string. If not provided, default to an empty string.
        // For example: /api/jobs?keyword=engineer
        const keyword = req.query.keyword || "";

        // Build a MongoDB query object to filter jobs based on the keyword.
        // We're using the $or operator to search for jobs where either the 'title' or the 'description'
        // field contains the keyword. The $regex operator is used for regex matching.
        // The $options: "i" makes the search case-insensitive.
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };

        // Execute the query:
        // .find(query) fetches jobs matching the query criteria.
        // .populate({ path: "company" }) replaces the 'company' field (which stores an ObjectId)
        //    with the actual Company document related to it.
        // .sort({ createdAt: -1 }) sorts the results by the 'createdAt' field in descending order
        //    (i.e., the most recently created jobs come first).
        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 });

        // If no jobs are found, send a 404 response.
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }

        // Send back the jobs data along with a success message.
        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
        // Optionally, you might want to send an error response here.
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}

// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}