import express from 'express';
import { User } from '../entity/User';
const router = express.Router();

router.post('/api/user', async (req, res) => {
    const {
        username,
        password,
        email,
        is_active
    } = req.body;

    const user = User.create({
        username : username,
        password : password,
        email : email,
        is_active : is_active
    });

    await user.save();

    return res.json(user);

});

export { router as createUserRouter };