import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  Store(key: string, value: any):void{
    localStorage.setItem(key, value);
  }
}
