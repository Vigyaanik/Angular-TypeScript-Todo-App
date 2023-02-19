import express from 'express';
import { Job } from '../entity/jobs';
const router = express.Router();

router.post('/api/jobs', async (req, res) => {
    const {
        customerId,
        customerName,
        jobDescription,
        dueDate,
        recurring,
        recurWeeks,
        comments
    } = req.body;


    const job = Job.create({
        customerId : customerId,
        customerName : customerName,
        jobDescription : jobDescription,
        dueDate : dueDate,
        recurring : recurring,
        recurWeeks : recurWeeks,
        comments : comments
    });

    await job.save();

    return res.json(job);

});

export { router as createJobRouter };