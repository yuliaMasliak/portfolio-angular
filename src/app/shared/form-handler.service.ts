import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

interface Feedback {
  Email: string;
  Message: string;
}
@Injectable({
  providedIn: 'root'
})
export class NetlifyFormsService {
  constructor(private http: HttpClient) {}

  submitFeedback(fbEntry: Feedback): Observable<any> {
    const entry = new HttpParams({
      fromObject: {
        'form-name': 'feedbackForm',
        ...fbEntry!
      }
    });

    return this.submitEntry(entry);
  }

  submitEntry(entry: HttpParams): Observable<any> {
    return this.http.post('/', entry.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text'
    });
  }
}
