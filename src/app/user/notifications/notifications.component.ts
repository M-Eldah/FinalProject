import { Component, Input } from '@angular/core';
import { UserChildNotificationDTO } from 'src/app/Types/Users/UserDetailsDto';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() Notifications?:UserChildNotificationDTO[];
}
