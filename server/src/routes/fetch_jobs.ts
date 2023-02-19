import express from "express";
import { Job } from "../entity/jobs";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/jobs", async (req, res) => {
    const jobs = await Job.find();
    // .select("job")
    // .from(Job, "job")
    // .where() // add conditions here
    return res.json(jobs);
})

export { router as fetchJobsRouter };