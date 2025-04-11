import express from "express";
import { register,login,updateProfile, logOut } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router =express.Router();

router.post("/register",register);
router.post('/login',login);
router.get("/logout",logOut);
router.put('/profile/update',isAuthenticated ,updateProfile);

export default router;