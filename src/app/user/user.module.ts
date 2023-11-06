import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { UserServicesComponent } from './user-services/user-services.component';
import { UserServicesRequestsComponent } from './user-services-requests/user-services-requests.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    DetailComponent,
    UserRequestsComponent,
    UserServicesComponent,
    UserServicesRequestsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    ReactiveFormsModule,
  ],
  exports: [
    DetailComponent,
    UserRequestsComponent,
    UserServicesComponent,
    UserServicesRequestsComponent,
    NotificationsComponent
  ]
})
export class UserModule { }
