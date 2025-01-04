import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthJWTService } from '../../../service/auth-jwt.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './company-login.component.html',
  styleUrl: './company-login.component.css',
})
export class CompanyLoginComponent {
  loginForm!: FormGroup;

  constructor(private router:Router,private fb: FormBuilder, private auth: AuthJWTService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log('on submit',this.loginForm.value);
    
    if (this.loginForm.valid) {
      this.auth.loginCompany(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('login : ', res);
          this.auth.setToken(res.token);
          this.router.navigate(['/company/jobs'])
        },
      });
    }
  }
}
