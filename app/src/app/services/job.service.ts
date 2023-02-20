import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) { }

  addJob(job: Job) {
    return this.http.post(this.baseUrl, job);
  }
}