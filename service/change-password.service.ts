import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  private changePasswordUrl = 'http://localhost:3000/api/users/change-password';
 
  constructor(private http: HttpClient) {}
 
  changePassword(data: any): Observable<any> {
    const token=localStorage.getItem('token');
    return this.http.put(this.changePasswordUrl, data, {
      headers: {Authorization: `Bearer ${token}`}
    });
  }
}