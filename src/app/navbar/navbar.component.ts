import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  LoggedIn=this.user.IsLoggedIn()
  constructor(public user:UserService, public router:Router) {
  }
  LogOut(){
    this.user.Logout();
    window.location.reload();
  }
  LogIn(){
    this.router.navigate(['/Login']);
    return false;
  }
  
}
