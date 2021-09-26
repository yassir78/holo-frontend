import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  
  findAll():Observable<Good[]>{
    return this.http.get<Good[]>(`${this.API}/good/all`);
  }
}
