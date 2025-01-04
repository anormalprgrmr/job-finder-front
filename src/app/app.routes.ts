import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CompanyComponent } from './company/company.component';
import { CompanySignupComponent } from './company/components/company-signup/company-signup.component';
import { CompanyLoginComponent } from './company/components/company-login/company-login.component';
import { CompanyJobsComponent } from './company/components/company-jobs/company-jobs.component';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: 'company/signup', component: CompanySignupComponent },
  { path: 'company/login', component: CompanyLoginComponent },
  { path: 'company/jobs', component: CompanyComponent },
  { path: 'job-list', component: JobListComponent },
  {
    path: 'company',
    component: CompanyComponent,
    // children: [{ path: 'signup', component: CompanySignupComponent }],
  },
];
