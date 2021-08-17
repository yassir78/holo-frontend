import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.base_url
  constructor(private http:HttpClient) { }
  login(username:string,password:string){
    return this.http.post(`${this.API}/login`,{username:username,password:password})
  }
}
