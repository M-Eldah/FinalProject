import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDetailsDTO } from 'src/app/Types/Users/UserDetailsDto';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';
import { UserUpdateDto } from 'src/app/Types/Users/UserUpdateDto';

@Component({
  selector: 'app-userDetail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() UserDetails?: UserDetailsDTO;
  name:string="Mail";
  Updateform=new FormGroup({
    Phone: new FormControl<string>('',[]
    ),
    Mail: new FormControl<string>('',[]
    ),
    Location: new FormControl<string>('',[]
    )
  })
  
  constructor(private helper: HelperService, private user: UserService)
  {}

  ngOnInit(): void {
    console.log(this.UserDetails)
    this.Updateform=new FormGroup({
      Phone: new FormControl<string>(this.UserDetails!.phone,[]
      ),
      Mail: new FormControl<string>(this.UserDetails!.email,[]
      ),
      Location: new FormControl<string>(this.UserDetails!.location,[]
      )
    })
  }

  Test():void{
    console.log(this.Updateform.value!.Mail)
  }
  Update():void{
    if(this.Updateform.invalid) return;
      const UserLogin : UserUpdateDto={ 
        phone:this.Updateform.value.Phone!,
        email:this.Updateform.value.Mail!,
        location:this.Updateform.value.Location!
      }
      console.log(UserLogin)
      this.user.UpdateUser(UserLogin).subscribe(
      {
        next:(Utoken:any)=>
        {
         
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }
    )
  }
}
