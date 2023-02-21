import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from 'src/app/services/my-data-service';
import { UsersCheckService } from 'src/app/services/users-check.service';

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
    constructor(private router: Router, private myDataService: MyDataService, private usersCheckService: UsersCheckService ) { 
      this.isLoggedIn = this.usersCheckService.isLoggedIn();
    }

    ngOnInit(): void {
      console.log("Before subscribe method!");
      this.myDataService.getData().subscribe((data) => {
        console.log("Hello world");
        this.jobs = <any[]>data;
      })
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
