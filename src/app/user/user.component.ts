import { Component } from '@angular/core';
import { UserDetailsDTO } from '../Types/Users/UserDetailsDto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  menulength: number=screen.height-250;
  UserDetails?:UserDetailsDTO;
  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      {
        next:(SiteUSER:UserDetailsDTO)=>{
          this.UserDetails=SiteUSER;
          console.log(this.UserDetails);
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
}
