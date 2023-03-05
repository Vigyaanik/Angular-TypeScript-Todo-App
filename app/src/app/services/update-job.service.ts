import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateJobService {

  private baseUrl = 'http://localhost:8080/api/jobs';
  
    constructor(private http: HttpClient) { }
  
    updateJob(job: Job): Observable<Job> {
      const url = `${this.baseUrl}/${job.jobId}`;
      return this.http.put<Job>(url, job);
    }


    getJob(jobId: number) {
      const url = `${this.baseUrl}/${jobId}`;
      return this.http.get<Job>(url);
    }

}
