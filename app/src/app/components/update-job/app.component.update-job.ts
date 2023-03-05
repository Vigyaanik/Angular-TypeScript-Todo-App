import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/services/job.service';
import { UpdateJobService } from 'src/app/services/update-job.service';


@Component({
    selector: 'app-job-add',
    templateUrl: './app.component.update-job.html',
    styleUrls: ['../../../assets/styles/app.component.add-job.css']
})

export class JobUpdateComponent {

    // job = new Job(form['value'].jobId, form['value'].customerId, form['value'].customerName, form['value'].jobDescription, form['value'].dueDate, form['value'].recurring, form['value'].recurWeeks, form['value'].comments);
  
    datenow = Date.now();
    dated = new Date(this.datenow);
    job: Job = new Job(0, 0, '', '', new Date(), false, 0, '', false, false);

  constructor(private router: Router, private http: HttpClient, private updateJobService: UpdateJobService, private route: ActivatedRoute) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['jobId'];
    this.updateJobService.getJob(jobId).subscribe(
      (job: Job) => {
        // this.job = job;
        this.job.jobId = jobId;
        console.log(job['recurring']);
        this.job.customerId = job['customerId'];
        this.job.customerName = job['customerName'];
        this.job.jobDescription = job['jobDescription'];
        this.job.dueDate = job['dueDate'];
        this.job.recurring = job['recurring'];
        this.job.recurWeeks = job['recurWeeks'];
        this.job.comments = job['comments'];

      },
      (error) => {
        console.log(error);
      }
    );
  }
  
    onSubmit(job: Job) {
        this.updateJobService.updateJob(this.job).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/home']);
        });
      }
}