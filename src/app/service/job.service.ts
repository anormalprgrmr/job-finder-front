import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  BACK_URL = 'http://localhost:5000';

  constructor(private cookieService: CookieService, private http: HttpClient) {}

  getJobsService() {
    // Get the token (assuming it's stored in localStorage)
    const token = this.cookieService.get('jobjob'); // replace 'your_token_key' with the actual key used to store the token
    console.log('tokenasdasds', token);

    // Create HttpHeaders with Authorization header
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // optional, if you are sending JSON
    });

    // Make the request with headers
    return this.http.get(`${this.BACK_URL}/job`, { headers });
  }
}
