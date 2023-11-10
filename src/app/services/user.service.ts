import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserReadDto from '../Types/Users/UserReadDto';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from '../Types/Users/UserDetailsDto';
import UserLoginDTO from '../Types/Users/UserLoginDto';
import UserAddDTO from '../Types/Users/UserAddDto';
import { UserUpdateDto } from '../Types/Users/UserUpdateDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client:HttpClient) { }

  getUsers():Observable<UserReadDto[]> {
    return this.client.get<UserReadDto[]>("https://localhost:7012/GetAllUsers");
  }
  getUser():Observable<UserDetailsDTO> {
    const requestOptions = { headers: this.RequestOption() };
    return this.client.get<UserDetailsDTO>(`https://localhost:7012/GetDetailsbyID`, requestOptions);
  }
  UpdateUser(UserDetails:UserUpdateDto):Observable<any> {
    const requestOptions = { headers: this.RequestOption() };
    return this.client.put<string>(`https://localhost:7012/Update`, UserDetails, requestOptions);
  }
  logInUser(UserLogin:UserLoginDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/login`,UserLogin);
  }
  RegisterUser(UserRegister:UserAddDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/User/Register`,UserRegister);
  }

  IsLoggedIn():Boolean{
    if(sessionStorage.getItem("Token")!=null)
    {
      return true;
    }
    if(localStorage.getItem("Token")==null)
    {
      return false;
    }
    const expiry = (JSON.parse(atob(localStorage.getItem("Token")!.split('.')[1]))).exp;
    if((Math.floor((new Date).getTime() / 1000)) > expiry)
    {
      this.Logout();
      return false;
    }
    return true;
  }
  IsUser():Boolean{
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("User"))
    {
      return true;
    }
    if(sessionStorage.getItem("Claims")!=null&&sessionStorage.getItem("Claims")?.includes("User"))
    {
      return true;
    }
    return false;
  }
  IsAdmin():Boolean{
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("Admin"))
    {
      return true;
    }
    if(sessionStorage.getItem("Claims")!=null&&sessionStorage.getItem("Claims")?.includes("Admin"))
    {
      return true;
    }
    return false;
  }
  IsManger():Boolean{
    if(localStorage.getItem("Claims")!=null&&localStorage.getItem("Claims")?.includes("Manger"))
    {
      return true;
    }
    if(sessionStorage.getItem("Claims")!=null&&sessionStorage.getItem("Claims")?.includes("Manger"))
    {
      return true;
    }
    return false;
  }
  GetUserId():String|null{
    if(localStorage.getItem("UserId")!=null)
    {
      return localStorage.getItem("UserId") ;
    }
    else
    {
      return sessionStorage.getItem("UserId") ;
    }
    
  }
  Logout():void{
    if(localStorage.getItem("UserId")!=null)
    {
      localStorage.removeItem("UserId");
      localStorage.removeItem("Token");
      localStorage.removeItem("Claims");
    }
    else
    {
      sessionStorage.removeItem("UserId");
      sessionStorage.removeItem("Token");
      sessionStorage.removeItem("Claims");
    }
   
  }
  RequestOption(): HttpHeaders
  {
    var api_key;
    if(localStorage.getItem("Token")!=null)
    {
      api_key = localStorage.getItem("Token");
    }else
    {
      api_key = sessionStorage.getItem("Token");
    }
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
    });
    return headers;
  }
  DeleteService(Id:Number){
    return this.client.delete(`https://localhost:7012/api/Service/${Id}`);
  }
  DeleteRequest(Id:Number){
    return this.client.delete(`https://localhost:7012/api/Request/${Id}`);
  }
  DeleteNotification(Id:Number){
    return this.client.delete(`https://localhost:7012/api/Notification/${Id}`);
  }
  DeleteBookMark(Id:Number){

  }
}
