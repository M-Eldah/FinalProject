import { Component, Input } from '@angular/core';
import { UserChildServicesDTO } from 'src/app/Types/Users/UserDetailsDto';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent {
  @Input() userServices: UserChildServicesDTO[]|undefined ;
}
