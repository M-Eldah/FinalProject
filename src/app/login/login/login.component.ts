import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { UserDetailsDTO } from 'src/app/Types/Users/UserDetailsDto';
import UserLoginDTO from 'src/app/Types/Users/UserLoginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Loginform=new FormGroup({
    userName: new FormControl<string>('',[]
    ),
    password: new FormControl<string>('',[]
    )
  })

  constructor(private helper: HelperService, private user: UserService)
  {}
 
  UserDetails?:UserDetailsDTO;
  ngOnInit(): void {
    this.user.getUser().subscribe(
      {
        next:(SiteUSER:UserDetailsDTO)=>{
          console.log(SiteUSER);
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
  Login():void{
    if(this.Loginform.invalid) return;
      const UserLogin : UserLoginDTO={ 
        username:this.Loginform.value.userName!,
        password:this.Loginform.value.password!,
      }
      console.log(UserLogin)
    this.user.logInUser(UserLogin).subscribe(
      {
        next:(Utoken:any)=>
        {
          console.log(Utoken);
          this.helper.Store("Token",Utoken["usertoken"]);
          this.helper.Store("UserId",Utoken["userclaims"][0]);
          this.helper.Store("Claims",Utoken["userclaims"].slice(1,Utoken["userclaims"].length));
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }
    )
  }
}
