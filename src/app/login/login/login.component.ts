import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  ErrorCode : number=101;
  Loginform=new FormGroup({
    userName: new FormControl<string>('',[
      Validators.required
    ]
    ),
    password: new FormControl<string>('',[
      Validators.required
    ]
    )
  })

  constructor(private helper: HelperService, private user: UserService)
  {}
 
  UserDetails?:UserDetailsDTO;
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
          const RememberMe=document.getElementById("loginCheck") as HTMLInputElement
          if(RememberMe.checked==true)
          {
            this.helper.Store("Token",Utoken["usertoken"]);
            this.helper.Store("UserId",Utoken["userclaims"][0]);
            this.helper.Store("Claims",Utoken["userclaims"].slice(1,Utoken["userclaims"].length));
          }
          else
          {
            this.helper.StoreSession("Token",Utoken["usertoken"]);
            this.helper.StoreSession("UserId",Utoken["userclaims"][0]);
            this.helper.StoreSession("Claims",Utoken["userclaims"].slice(1,Utoken["userclaims"].length));
          }
          this.helper.Redirect("/User");
        },
        error:(error)=>{
          this.ErrorCode=error["status"];
        },
      }
    )
  }
}
