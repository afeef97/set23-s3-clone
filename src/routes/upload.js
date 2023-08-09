import { Router } from "express";
import uploadImage from "../middleware/upload/image";
import File from "../database/model/File";

const uploadRoute = Router();

uploadRoute.post(
    "/profile-picture",
    uploadImage.single("profile-picture"),
    async function (req, res) {
        if (req.uploadError) {
            return res.status(403).json({ error: req.uploadError });
        }
        try {
            await File.create({
                ...req.file,
                path: req.file.path.replace("public\\", ""),
                created_by: 1,
            });
            res.status(200).json({ file: "Image", data: req.file });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
);

uploadRoute.post("/resume", function (req, res) {
    res.status(200).json({ file: "Resume" });
});

export default uploadRoute;
