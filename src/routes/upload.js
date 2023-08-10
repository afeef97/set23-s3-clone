import { Router } from "express";
import uploadImage, { uploadError } from "../middleware/upload/image";
import * as uploadController from "../controllers/upload/uploadControllers";
import isAuthenticated from "../middleware/isAuthenticated";

const uploadRoute = Router();

uploadRoute.post(
    "/profile-picture",
    isAuthenticated,
    uploadImage.single("profile-picture"),
    uploadError,
    uploadController.uploadImage
);

uploadRoute.post("/resume", function (req, res) {
    res.status(200).json({ file: "Resume" });
});

export default uploadRoute;
