import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Good } from '../models/good';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  private readonly API = environment.base_url

  constructor(private http: HttpClient) { }

  addGood(good:Good){
    console.log("Good Service")
    console.log(good)
    return this.http.post(`${this.API}/good/create`, good);
  }
}
