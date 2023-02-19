import express from 'express';
import { Job } from '../entity/jobs';

const router = express.Router();

router.delete("/api/jobs/:id", async (req, res) => {

    const { id } = req.params;

    const job = await Job.delete({id: parseInt(req.params.id)});
    console.log(job);

    return res.json(job);

})

export { router as deleteJobRouter };