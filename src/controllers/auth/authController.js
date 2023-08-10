export async function registerUser(req, res) {
    const body = req.body;
    try {
        // const user = await User.create({ ...body });
        res.status(200).json({ ...body });
    } catch (error) {
        res.status(500).json({ error });
    }
}
