import express from 'express';
import { Job } from '../entity/jobs';

const router = express.Router();

// Update a job by ID
router.put('/api/jobs/:id', async (req, res) => {
  const id = req.params.id;
  const {
    customerId,
    customerName,
    jobDescription,
    dueDate,
    recurring,
    recurWeeks,
    comments,
  } = req.body;

  try {
    const job = await Job.findOne({ where: { id: Number(id) } });

    if (!job) {
    return res.status(404).json({ message: 'Job not found' });
    }

    job.customerId = customerId;
    job.customerName = customerName;
    job.jobDescription = jobDescription;
    job.dueDate = dueDate;
    job.recurring = recurring;
    job.recurWeeks = recurWeeks;
    job.comments = comments;

    await job.save();

    return res.json(job);
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
        }
});

export { router as updateJobRouter };
