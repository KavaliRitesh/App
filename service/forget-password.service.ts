import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForgetPasswordService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  // Step 1: Request reset (with email and favourites)
  requestPasswordReset(data: { email: string, favourites: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, data);
  }

  // Step 2: Use token to reset password
  resetPassword(token: string, data: { newpassword: string }): Observable<any> {
    return this.http.patch(`${this.apiUrl}/reset-password/${token}`, data);
  }
}