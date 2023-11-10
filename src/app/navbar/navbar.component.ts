import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  LoggedIn=this.user.IsLoggedIn()
  constructor(public user:UserService, public helper:HelperService) {
  }
  LogOut(){
    this.user.Logout();
    window.location.reload();
  }
  LogIn(){
    this.helper.Redirect('/Login');
    return false;
  }
  
}
