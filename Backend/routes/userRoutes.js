import express from "express";
import { register,login,updateProfile, logOut } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router =express.Router();

router.post("/register",singleUpload,register);
router.post('/login',login);
router.get("/logout",logOut);
router.put('/profile/update',isAuthenticated ,updateProfile);

export default router;