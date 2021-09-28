import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.base_url
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(`${this.API}/auth/login`, { email: email, password: password })
  }
  register(user: User) {
    return this.http.post(`${this.API}/auth/register`, user);
  }
}
