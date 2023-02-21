import express from "express";
import { User } from "../entity/User";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/users/:username/:password", async (req, res) => {
    // const users = await User.find();

    const { username } = req.params;
    const { password } = req.params;
    // console.log(req.params.username)

    const users = await createQueryBuilder(
        'user'
    )
    .select("user.username")

    .from(User, "user")
    // const job = await Job.delete({id: parseInt(req.params.id)});
    .where('user.username = :username AND user.password = :password', {username: req.params.username, password: req.params.password}) // add conditions here
    .getOne()

    console.log("Data sent...");
    return res.json({ success: !!users });
})

export { router as fetchUsersRouter };