import { Component } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.home.html',
    styleUrls: ['../../../assets/styles/app.component.home.css']
  })

export class JobComponent {
    title = 'my-app';
    jobs: any[] = [];
  
    displayEntries(count: number) {
      // Implementation to display the specified number of entries
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
}
