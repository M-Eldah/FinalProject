import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedcomponentModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
