import express from "express";
import { Job } from "../entity/jobs";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/jobs/:id", async (req, res) => {

    const { id } = req.params;
    const jobs = await createQueryBuilder(
        'jobs'
    )
    .select("jobs.id")
    .addSelect("jobs.customerId")
    .addSelect("jobs.customerName")
    .addSelect("jobs.jobDescription")
    .addSelect("jobs.dueDate")
    .addSelect("jobs.recurring")
    .addSelect("jobs.recurWeeks")
    .addSelect("jobs.comments")
    .addSelect("jobs.jobComplete")
    .addSelect("jobs.paymentReceived")
    .from(Job, "jobs")
    .where('jobs.id = :id', {id: req.params.id})
    .getOne()

    // console.log("Data sent...");
    if (!jobs) {
        return res.status(404).json({ success: false, message: "Job not found" });
    }
    
    return res.json({ success: !!jobs, jobs: jobs });
})

export { router as fetchOneJobRouter };