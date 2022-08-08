import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(userId:string, passwd:string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/login?userId=${userId}&passwd=${passwd}`);
  }
}
