import File from "../../database/model/File";
import User from "../../database/model/User";

export async function uploadImage(req, res) {
    try {
        await User.update(
            {
                profile_picture_url: req.file.path.replace("public\\", ""),
            },
            { where: { id: req.session.auth } }
        );
        await File.create({
            ...req.file,
            path: req.file.path.replace("public\\", ""),
            created_by: req.session.auth,
        });
        res.status(200).json({ file: "Image", data: req.file });
    } catch (error) {
        res.status(500).json({ error });
    }
}
