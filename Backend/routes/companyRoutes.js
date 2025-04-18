import express from "express";
import { register,getCompany,getCompanyById,updateCompany } from "../controllers/companyController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router =express.Router();

router.post('/register',isAuthenticated ,register);

router.get('/get',isAuthenticated,getCompany);

router.get('/get/:id',isAuthenticated,getCompanyById);

router.put('/update/:id',isAuthenticated,singleUpload,updateCompany);

export default router;
