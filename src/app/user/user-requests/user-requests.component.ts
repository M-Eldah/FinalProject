import { Component, Input } from '@angular/core';
import { UserChildRequestDTO } from 'src/app/Types/Users/UserDetailsDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent {
  @Input() userRequests: UserChildRequestDTO[]|undefined ;
  constructor(private UserService: UserService)
  {

  }
  DeleteRequest(e:HTMLElement,request:UserChildRequestDTO)
  {
    this.UserService.DeleteRequest(request.id).subscribe(
      {
        next:(any)=>{
          e.remove();
          this.userRequests?.splice(this.userRequests.indexOf(request),1)
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
}
