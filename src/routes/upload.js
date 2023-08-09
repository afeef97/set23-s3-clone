import { Router } from "express";
import uploadImage from "../middleware/upload/image";

const uploadRoute = Router();

uploadRoute.post(
    "/profile-picture",
    uploadImage.single("profile-picture"),
    function (req, res) {
        console.log(req.file);
        res.status(200).json({ file: "Image" });
    }
);

uploadRoute.post("/resume", function (req, res) {
    res.status(200).json({ file: "Resume" });
});

export default uploadRoute;
