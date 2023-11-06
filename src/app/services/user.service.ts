import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserReadDto from '../Types/Users/UserReadDto';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from '../Types/Users/UserDetailsDto';
import UserLoginDTO from '../Types/Users/UserLoginDto';
import UserAddDTO from '../Types/Users/UserAddDto';
import { UserUpdateDto } from '../Types/Users/UserUpdateDto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client:HttpClient,private token:TokenService) { }

  getUsers():Observable<UserReadDto[]> {
    return this.client.get<UserReadDto[]>("https://localhost:7012/GetAllUsers");
  }
  getUser():Observable<UserDetailsDTO> {
    const requestOptions = { headers: this.token.RequestOption() };
    return this.client.get<UserDetailsDTO>(`https://localhost:7012/GetDetailsbyID`, requestOptions);
  }
  UpdateUser(UserDetails:UserUpdateDto):Observable<any> {
    const requestOptions = { headers: this.token.RequestOption() };
    return this.client.put<string>(`https://localhost:7012/Update`, UserDetails, requestOptions);
  }
  logInUser(UserLogin:UserLoginDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/login`,UserLogin);
  }
  RegisterUser(UserRegister:UserAddDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/User/Register`,UserRegister);
  }
  IsLoggedIn():Boolean{
    var check:Boolean=false;
    if(localStorage.getItem("Token")!=null)
    {
      const expiry = (JSON.parse(atob(localStorage.getItem("Token")!.split('.')[1]))).exp;
      console.log(expiry);
      if((Math.floor((new Date).getTime() / 1000)) <= expiry)
      {
        check=true;
      }
    }
    return check;
  }
  IsUser():Boolean{
    var check:Boolean=false;
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("User"))
    {
      check=true;
    }
    return check;
  }
  IsAdmin():Boolean{
    var check:Boolean=false;
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("Admin"))
    {
      check=true;
    }
    return check;
  }
  IsManger():Boolean{
    var check:Boolean=false;
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("Manger"))
    {
      check=true;
    }
    return check;
  }
  GetUserId():String|null{
    return localStorage.getItem("UserId") ;
  }
  Logout():void{
    localStorage.removeItem("UserId");
    localStorage.removeItem("Token");
    localStorage.removeItem("Claims");
  }
}
