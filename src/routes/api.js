import { Router } from "express";
import User from "../database/model/User";
import uploadImage, { uploadError } from "../middleware/upload/image";
import * as authController from "../controllers/auth/authController";

const apiRoutes = Router();

apiRoutes.post(
    "/registerUser",
    uploadImage.single("profile-picture"),
    uploadError,
    authController.registerUser
);

export default apiRoutes;
