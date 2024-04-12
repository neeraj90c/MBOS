import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { UserLoginDTO, UserResponseDTO } from './login/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient){}

  BaseURL = environment.apiURL
  
  userlogin(data: UserLoginDTO): Observable<UserResponseDTO> {
    return this.http.post<UserResponseDTO>(`${this.BaseURL}/users/auth`, data);
  }


}
