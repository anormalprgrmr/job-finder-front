import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http : HttpClient
  ) {}

  BACK_URL = 'http://localhost:5000'
  addJobService(data:any){
    console.log('add');
    
    return this.http.post(`${this.BACK_URL}/company`,data)

  }

}
