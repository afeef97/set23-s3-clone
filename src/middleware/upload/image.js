import multer from "multer";

const uploadImage = multer({
    dest: "public/upload",
});

export default uploadImage;
