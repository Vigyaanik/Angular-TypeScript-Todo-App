import express from "express";
import { Translate } from "../entity/Translate";
import { User } from "../entity/User";
const router = express.Router();

router.post("/api/user/:username/translate", async (req, res) => {

    const { username } = req.params;

    const { language } = req.body;

    const user = await User.findOneBy({username: req.params.username})

    if (!user ) {
        return res.json ({ error: "User not found" });
    }

    const translate = Translate.create({
        username: user.username,
        language: language,
        user
    });

    console.log(username);
    await translate.save();

    return res.json(translate);
});

export { router as createTranslateRouter };