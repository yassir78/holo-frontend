import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = "http://localhost:3000"
  constructor(private http:HttpClient) { }
  login(username:string,password:string){
    return this.http.post(`${this.API}/login`,{username:username,password:password})

  }
}
