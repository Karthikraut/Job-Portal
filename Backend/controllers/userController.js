import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from  "dotenv"
dotenv.config();


export const register = async (req,res)=>{
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
         
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exist with this email.',
                success: false,
            })
        }

        // Generate a unique salt using 10 rounds (higher means more secure but slower)
// Salt adds randomness to the hash, making it harder to crack even if two users have the same password
        const SALT_ROUND =parseInt(process.env.SALT)
        const salt = await bcrypt.genSalt(SALT_ROUND); 
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });
        
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });

    } catch (error) {
        console.log("Error:- ", error);
    }
}

export const login = async(req,res)=>{
    try {
        console.log("Request Body:- ",req.body);

        const {email,password,role}=req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            })
        }

        const user =await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        if(!isPasswordMatched){
            return res.status(400).json({
                message:"Incorrect email or password",
                success: false
            })
        }

        if(role!= user.role){
            return res.status(400).json({
                message:"Account doesn't exist with current role.",
                success: false
            })
        }

        const tokenData = {
            userId: user._id
        }

        // Generate JWT token synchronously
        const token = jwt.sign(tokenData, process.env.SECRET_KEY.trim(), { expiresIn: '1d' });

        const sanitizedUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        // Set cookie and send response
        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            })
            .json({
                message: `Welcome back ${sanitizedUser.fullname}`,
                user: sanitizedUser,
                success: true
            });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
}

export const logOut =async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message: "Logout successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = async(req,res)=>{
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);
        //In up step we can also do findByIdandUpdate reather than finding it and manuaaly doing it

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    } catch (error) {
        
    }
}