import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
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
