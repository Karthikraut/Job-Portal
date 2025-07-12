// Importing required modules
import express from "express";               // Express is a Node.js web framework used to create APIs and web servers.
import dotenv from "dotenv";                 // dotenv loads environment variables from a .env file into process.env
import cors from "cors";                     // CORS (Cross-Origin Resource Sharing) middleware to allow/disallow requests from other origins
import cookieParser from "cookie-parser";    // Parses cookies attached to the client request object
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoutes.js"
import companyRoute from "./routes/companyRoutes.js";
import jobRoute from "./routes/jobRoutes.js";
import applcationRoute from './routes/applicationRoutes.js'
// Create an instance of an Express application
const app = express();

// Load environment variables from a .env file into process.env (Dot env file is used for Storing sensitive information like API keys, database URLs, etc. AND CONFIGURATION SETTINGS)
dotenv.config();

// Get the PORT value from environment variables
const PORT = process.env.PORT;

// Middleware to parse incoming JSON data in request body
app.use(express.json());

// Middleware to parse URL-encoded data (usually from form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies in incoming requests
app.use(cookieParser());

/*
 *  CORS configuration object:
 * - origin: defines which client origins are allowed to access the server.
 * - credentials: allows cookies and authorization headers to be sent in cross-origin requests.
 */
const corsOption = {
    origin: 'http://localhost:5173', // Only allow this origin (typically the frontend development server)
    credentials: true                // Allow credentials such as cookies, authorization headers
};

// Enable CORS using the options defined above
app.use(cors(corsOption));


//API Route
app.use('/api/v1/user',userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use('/api/v1/application',applcationRoute)
// Start the server and listen on the defined PORT
app.listen(PORT, () => {
    connectDB();
    console.log("Server Running at Port: ", PORT); // Log a message when the server starts successfully
});
