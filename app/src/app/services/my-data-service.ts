import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
    providedIn: 'root'
})
export class MyDataService {
    private baseUrl = 'http://localhost:8080/api/jobs';
  
    constructor(private http: HttpClient) { }
  
    getData(): Observable<Job[]> {
      return this.http.get<Job[]>(this.baseUrl);
    }
}