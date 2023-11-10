import { Component, Input } from '@angular/core';
import { UserChildNotificationDTO } from 'src/app/Types/Users/UserDetailsDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() Notifications?:UserChildNotificationDTO[];
  constructor(private UserService: UserService)
  {

  }
  DeleteNotification(e:HTMLElement,Service:UserChildNotificationDTO)
  {
    this.UserService.DeleteNotification(Service.id).subscribe(
      {
        next:(any)=>{
          e.remove();
          this.Notifications?.splice(this.Notifications.indexOf(Service),1)
        },
        error:(error)=>{
          console.log("Api Call Failed",error)
        },
      }     
    );
  }
}
