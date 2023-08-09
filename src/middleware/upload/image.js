import { header } from "express-validator";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/upload/images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname +
                "-" +
                uniqueSuffix +
                path.extname(file.originalname)
        );
    },
});

const uploadImage = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const whitelistExt = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
        const fileSize = parseInt(req.headers["content-length"]);
        const maxSize = 1500000;
        const whitelistMime = [
            "images/png",
            "images/jpg",
            "images/jpeg",
            "images/gif",
            "images/webp",
        ];
        let ext = path.extname(file.originalname);
        let mime = file.mimetype;

        if (fileSize > maxSize) {
            req.uploadError = "Max upload size is 1.5MB";
            return cb(null, false);
        }

        if (!whitelistMime.includes(mime) && !whitelistExt.includes(ext)) {
            req.uploadError = "Only png, jpg, jpeg, gif, and webp are allowed";
            return cb(null, false);
        }

        cb(null, true);
    },
});

export default uploadImage;
