import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.home.html',
    styleUrls: ['../../../assets/styles/app.component.home.css']
  })

export class JobComponent {
    title = 'my-app';
    jobs: any[] = [];
  
    constructor(private router: Router) { }

    displayEntries(count: number) {
      // Implementation to display the specified number of entries

        const displayedJobs = this.jobs.slice(0, count);
        
        // display the retrieved jobs
        displayedJobs.forEach(job => {
          console.log(`Job ID: ${job.jobId}`);
          console.log(`Customer ID: ${job.customerId}`);
          console.log(`Customer Name: ${job.customerName}`);
          console.log(`Job Description: ${job.jobDescription}`);
          console.log(`Due Date: ${job.dueDate}`);
          console.log(`Recurring: ${job.recurring}`);
          console.log(`Recur Weeks: ${job.recurWeeks}`);
          console.log(`Comments: ${job.comments}`);
        });
    }
        
  
    editJob(job: any) {
      // Implementation to edit the job
    }
  
    deleteJob(job: any) {
      // Implementation to delete the job
    }

    completeJob(job: any) {
      // Implementation to complete the job
    }

    addJob() {
      // Implementation to add the job
      this.router.navigate(['/add-job']);
    }
}
