import { Component, Input } from '@angular/core';
import { ProviderChildRequestDTO } from 'src/app/Types/Users/UserDetailsDto';

@Component({
  selector: 'app-user-services-requests',
  templateUrl: './user-services-requests.component.html',
  styleUrls: ['./user-services-requests.component.css']
})
export class UserServicesRequestsComponent {
  @Input() userRequests: ProviderChildRequestDTO[]|undefined ;
}
