import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import UserAddDTO from 'src/app/Types/Users/UserAddDto';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Registerform=new FormGroup({
    userName: new FormControl<string>('',[]
    ),
    password: new FormControl<string>('',[
      Validators.minLength(8)
    ]
    ),
    phone: new FormControl<string>('',[
    ]
    ),
    Email: new FormControl<string>('',[
      Validators.email
    ]
    ),
    Location: new FormControl<string>('',[]
    )

  })

  constructor(private helper: HelperService, private user: UserService)
  {}
  Login():void{
    if(this.Registerform.invalid) return;
      const UserLogin : UserAddDTO={ 
        userName:this.Registerform.value.userName!,
        password:this.Registerform.value.password!,
        phone:this.Registerform.value.phone!,
        email:this.Registerform.value.Email!,
        location:this.Registerform.value.Location!,
      }
      console.log(UserLogin)
    this.user.RegisterUser(UserLogin).subscribe(
      {
        next:(Utoken:any)=>
        {
          console.log(Utoken["usertoken"]);
          this.helper.Store("Token",Utoken["usertoken"]);
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }
    )
  }
}
