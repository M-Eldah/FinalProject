import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor(private router: Router)
  {
    
  }
  Store(key: string, value: any):void{
    localStorage.setItem(key, value);
  }
  StoreSession(key: string, value: any):void{
    sessionStorage.setItem(key, value);
  }
  Redirect(url: string):void
  {
    this.router.navigate([url]);
  }
}
