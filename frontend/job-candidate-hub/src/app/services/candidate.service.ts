import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Candidate } from '../models/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:5000'; // Use relative URL

  constructor(private http: HttpClient) {}

  addOrUpdateCandidate(candidate: Candidate): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/api/candidates`, candidate, { headers }).pipe(
      catchError(this.handleError) // Handle errors
    );
  }
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error occurred';
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side error
    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
  }
  // You can customize how you want to handle errors here, e.g., show an alert or log to console
  console.error(errorMessage);
  return throwError(() => new Error('test')) // Throw an observable with the error message
}
}
