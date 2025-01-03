import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthJWTService } from '../../../service/auth-jwt.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-company-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './company-signup.component.html',
  styleUrl: './company-signup.component.css',
})
export class CompanySignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthJWTService,private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      description: [''],
      location: [''],
      website: [''],
      industry: ['', Validators.required],
      size: ['Small'],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value[0]);
      this.auth.signupCompany(this.signupForm.value).subscribe({next:(res)=>{
        console.log('res is :',res);
        console.log('succes is :',res.success);
        
        if (res.success == true ) {
          this.router.navigate(['login'])
        }
      }})
      
    } else {
      console.log('Form is invalid');
    }
  }
}
