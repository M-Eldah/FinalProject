import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDetailsDTO } from 'src/app/Types/Users/UserDetailsDto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() UserDetails?: UserDetailsDTO;

  Updateform=new FormGroup({
    Phone: new FormControl<string>('',[]
    ),
    Mail: new FormControl<string>('',[]
    ),
    Location: new FormControl<string>('',[]
    )
  })
}
