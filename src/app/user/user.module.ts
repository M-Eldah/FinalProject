import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRequestsComponent } from './user-requests/user-requests.component';

@NgModule({
  declarations: [
    DetailComponent,
    UserRequestsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedcomponentModule,
    ReactiveFormsModule,
  ],
  exports: [
    DetailComponent,
    UserRequestsComponent
  ]
})
export class UserModule { }
