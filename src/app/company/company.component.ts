import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddJobComponent } from './components/add-job/add-job.component';
import { CompanyService } from '../service/company.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthJWTService } from '../service/auth-jwt.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  appModal: boolean = false;
  reqModal: boolean = false;
  
  addJobForm:FormGroup;


  constructor(private companyService: CompanyService,
    private authJWT:AuthJWTService,
  ) {
    this.addJobForm = new FormGroup({
      title: new FormControl('') ,
      company: new FormControl('') ,
      location: new FormControl('') ,
      salary: new FormControl('') ,
      description: new FormControl('') ,
      requirements: new FormControl('') ,
      postedBy: new FormControl('') ,
    })
  }

  addJob() {
    console.log('add job method');
    
    const token = 'dbhagsv';
    this.authJWT.verifyToken(token).subscribe({
      next:(res:any)=>{
        console.log('verify res : ', res);
        
        this.addJobForm.patchValue({
          postedBy : res.user
        })
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

    

    this.companyService.addJobService(this.addJobForm.value).subscribe({
      next: (res:any) => {
        console.log('job created');
        console.log(res);
        
      },
      error: (err:any) => {
        console.log(err);
      },
    });
  }

  toggleAppModal() {
    this.appModal = !this.appModal;
  }

  toggleReq() {
    console.log('heyy');

    this.reqModal = !this.reqModal;
  }
}
