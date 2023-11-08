import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private apiUrl = 'http://localhost:1337/api/jobs?populate=*';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
