import { Component, OnInit } from '@angular/core';
import { HelperService } from './services/helper.service';
import { UserService } from './services/user.service';
import UserReadDto from './Types/Users/UserReadDto';
import { UserDetailsDTO } from './Types/Users/UserDetailsDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
