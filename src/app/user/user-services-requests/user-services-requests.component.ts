import { Component, Input } from '@angular/core';
import { ProviderChildRequestDTO } from 'src/app/Types/Users/UserDetailsDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-services-requests',
  templateUrl: './user-services-requests.component.html',
  styleUrls: ['./user-services-requests.component.css']
})
export class UserServicesRequestsComponent {
  @Input() userRequests: ProviderChildRequestDTO[]|undefined ;
  constructor(private UserService: UserService)
  {

  }
  DeleteRequest(e:HTMLElement,request:ProviderChildRequestDTO)
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
