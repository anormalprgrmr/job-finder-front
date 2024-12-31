import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddJobComponent } from "./components/add-job/add-job.component";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, AddJobComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  appModal:boolean = false ;
  reqModal:boolean = false ;
  
  toggleAppModal(){
    this.appModal = !this.appModal;
  }

  toggleReq(){
    console.log('heyy');
    
    this.reqModal = !this.reqModal;
  }

}
