import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../service/company.service';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
  jobs: any = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobsService().subscribe({
      next: (res) => {
        console.log('response is : ', res);

        this.jobs = res;
      },
    });
  }
}
