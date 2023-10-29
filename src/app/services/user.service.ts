import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserReadDto from '../Types/Users/UserReadDto';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from '../Types/Users/UserDetailsDto';
import UserLoginDTO from '../Types/Users/UserLoginDto';
import UserAddDTO from '../Types/Users/UserAddDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client:HttpClient) { }

  getUsers():Observable<UserReadDto[]> {
    return this.client.get<UserReadDto[]>("https://localhost:7012/GetAllUsers");
  }
  getUser():Observable<UserDetailsDTO> {
    let api_key = localStorage.getItem("Token");
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
    const requestOptions = { headers: headers };
    return this.client.get<UserDetailsDTO>(`https://localhost:7012/GetDetailsbyID`, requestOptions);
  }
  logInUser(UserLogin:UserLoginDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/login`,UserLogin);
  }
  RegisterUser(UserRegister:UserAddDTO):Observable<any>{
    return this.client.post<string>(`https://localhost:7012/User/Register`,UserRegister);
  }
}
