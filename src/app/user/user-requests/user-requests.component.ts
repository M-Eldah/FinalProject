import { Component, Input } from '@angular/core';
import { UserChildRequestDTO } from 'src/app/Types/Users/UserDetailsDto';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent {
  @Input() userRequests: UserChildRequestDTO[]|undefined ;
}
