import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from 'src/app/services/my-data-service';
import { UsersCheckService } from 'src/app/services/users-check.service';
import { DeleteJobService } from 'src/app/services/delete-job.service';
import { UpdateJobService } from 'src/app/services/update-job.service';

// import {} from '../../services';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.home.html',
    styleUrls: ['../../../assets/styles/app.component.home.css']
  })

export class JobComponent {
    title = 'my-app';
    jobs: any[] = [];
    myData: any;
    isLoggedIn: boolean = false;
    constructor(private router: Router, private myDataService: MyDataService, private usersCheckService: UsersCheckService, private deleteJobService: DeleteJobService, private updateJobService: UpdateJobService ) { 
      this.isLoggedIn = this.usersCheckService.isLoggedIn();
    }

    ngOnInit(): void {
      console.log("Before subscribe method!");
      this.myDataService.getData().subscribe((jobs: Job[]) => { // Specify the type of the jobs array in the subscription
        console.log("Hello world");
        this.getJobs(); // Assign the retrieved jobs to the jobs array
      })
    }

    getJobs() {
      this.myDataService.getData().subscribe((jobs: Job[]) => {
        this.jobs = jobs;
      });
    }

    displayEntries(count: number) {
      // Implementation to display the specified number of entries

        const displayedJobs = this.jobs.slice(0, count);
        
        // display the retrieved jobs
        displayedJobs.forEach(job => {
          console.log(`Job ID: ${job.id}`);
          console.log(`Customer ID: ${job.customerId}`);
          console.log(`Customer Name: ${job.customerName}`);
          console.log(`Job Description: ${job.jobDescription}`);
          console.log(`Due Date: ${job.dueDate}`);
          console.log(`Recurring: ${job.recurring}`);
          console.log(`Recur Weeks: ${job.recurWeeks}`);
          console.log(`Comments: ${job.comments}`);
        });
    }

    translate() {
      
    }
        
    logout(): void {
      this.usersCheckService.logout();
      this.isLoggedIn = false;
    }
  
    editJob(job: any) {
      // Implementation to edit the job
      this.router.navigate(['/edit-job', job.id]);
    }
  
    deleteJob(job: any) {
      // Implementation to delete the job

      this.deleteJobService.deleteJob(job.id).subscribe((data) => {
        console.log(data);
        this.getJobs();
        this.router.navigate(['/home']);
      });

    }

    completeJob(job: any) {
      // Implementation to complete the job
    }

    addJob() {
      // Implementation to add the job
      this.router.navigate(['/add-job']);
    }

}
