import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  IsAdmin=this.user.IsAdmin()
  constructor(public user:UserService, public router:Router) {
  
  }
  ngOnInit(): void {
    if(!this.user.IsLoggedIn())
    {
      this.router.navigate(['/Login'])
    }
  }
  
}
