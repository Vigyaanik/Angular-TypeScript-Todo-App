import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeleteJobService {

  private baseUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient, private router: Router) { }

  deleteJob(jobId: number) {
    const url = `${this.baseUrl}/${jobId}`;
    return this.http.delete(url);
  }
}
