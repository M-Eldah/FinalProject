import { Component, Input } from '@angular/core';
import { UserChildServicesDTO } from 'src/app/Types/Users/UserDetailsDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent {
  @Input() userServices: UserChildServicesDTO[]|undefined ;
  constructor(private UserService: UserService)
  {

  }
  DeleteService(e:HTMLElement,Service:UserChildServicesDTO)
  {
    this.UserService.DeleteService(Service.id).subscribe(
      {
        next:(any)=>{
          e.remove();
          this.userServices?.splice(this.userServices.indexOf(Service),1)
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
}
