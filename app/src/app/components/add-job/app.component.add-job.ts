import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
  constructor(private router: Router, private http: HttpClient) {
  }


    onSubmit(job:Job) {
        // submit form data to a backend API or add data to local data model

        this.http.post('http://localhost:3000/jobs', job)
            .subscribe(res => {
                console.log(res);
            });

        // navigate to another page after form submission
        this.router.navigate(['/home']);
    }
}