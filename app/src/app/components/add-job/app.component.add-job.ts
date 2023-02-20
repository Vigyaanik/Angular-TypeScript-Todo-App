import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/services/job.service';


@Component({
    selector: 'app-job-add',
    templateUrl: './app.component.add-job.html',
    styleUrls: ['../../../assets/styles/app.component.add-job.css']
})

export class JobAddComponent {

    // job = new Job(form['value'].jobId, form['value'].customerId, form['value'].customerName, form['value'].jobDescription, form['value'].dueDate, form['value'].recurring, form['value'].recurWeeks, form['value'].comments);
  
    datenow = Date.now();
    dated = new Date(this.datenow);
    job = new Job(0, 0, '', '', this.dated, false, 0, '');
  constructor(private router: Router, private http: HttpClient, private jobService: JobService) {
  }
    onSubmit(job: Job) {
        this.jobService.addJob(this.job).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/home']);
        });
      }
}