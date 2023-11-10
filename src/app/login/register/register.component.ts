import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Goverment from 'src/app/Types/Goverment';
import UserAddDTO from 'src/app/Types/Users/UserAddDto';
import { HelperService } from 'src/app/services/helper.service';
import { LocationsListService } from 'src/app/services/locations-list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  DuplicateUsername:boolean = false;
  goverments:Goverment[] | undefined;
  Registerform=new FormGroup({
    userName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(3)
    ]
    ),
    password: new FormControl<string>('',[
      Validators.minLength(8),
      Validators.required
    ]
    ),
    phone: new FormControl<string>('',[
      Validators.minLength(12),
      Validators.required
    ]
    ),
    email: new FormControl<string>('',[
      Validators.email,
      Validators.required
    ]
    ),
    Location: new FormControl<string>('',[
      Validators.required
    ]
    )

  })

  constructor(private helper: HelperService, private user: UserService,private Loc:LocationsListService)
  {}
  ngOnInit(): void {
    this.goverments=this.Loc.Goverments;
    console.log(this.goverments);
  }
  Login():void{
    if(this.Registerform.invalid) return;
      const UserLogin : UserAddDTO={ 
        userName:this.Registerform.value.userName!,
        password:this.Registerform.value.password!,
        phone:this.Registerform.value.phone!,
        email:this.Registerform.value.email!,
        location:this.Registerform.value.Location!,
      }
      console.log(UserLogin)
    this.user.RegisterUser(UserLogin).subscribe(
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
          this.DuplicateUsername= error["error"][0]["code"]=="DuplicateUserName";
        },
      }
    )
  }
}
