import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import {  jwtDecode} from "jwt-decode";
const TOKEN_NAME = 'jobjob'

@Injectable({
  providedIn: 'root',
})
export class AuthJWTService {
  private apiUrl = 'http://localhost:5000'; // Your backend API URL

  constructor(private http: HttpClient,private cookieService:CookieService) {}

  verifyToken(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/verify-token`);
  }

  signupCompany(clientData: any) {
    console.log(clientData);
    return this.http.post<any>(`${this.apiUrl}/auth/signup/company`, clientData);
  }
  loginCompany(clientData: any) {
    console.log(clientData);

    return this.http.post<any>(`${this.apiUrl}/auth/login/company`, clientData);
  }
  loginUser(clientData: any) {
    console.log(clientData);

    return this.http.post<any>(`${this.apiUrl}/auth/login/user`, clientData);
  }
  setToken(token: string) {
    this.cookieService.set(TOKEN_NAME, token);
  }

  getToken() {
    return this.cookieService.get(TOKEN_NAME);
  }

  getTokenInfo() {
    // let api = `${this.endpoint}/user-profile/${id}`;
    // return this.http.get(api, { headers: this.headers }).pipe(
    //   map(res => {
    //     return res || {};
    //   }),
    //   catchError(this.handleError),
    // );
    const cookieValue = this.cookieService.get('jobjob');
    const info: any = jwtDecode(cookieValue);
    console.log('info token is : ',info);
    
    // console.log('user info', info);
    return info;
  }
}
