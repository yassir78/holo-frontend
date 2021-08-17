import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponseApi } from '../models/getResponseApi';

@Injectable({
  providedIn: 'root'
})
export class GetResponseApiService {
  private readonly API = "https://api.getresponse.com/v3/contacts"
  constructor(private http: HttpClient) { }

  saveContact(getReponseAPi: GetResponseApi) {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-auth-token': 'api-key 8ndtifh1asicn585irsfw55hyuliryai'
    });
    let options = { headers: headers };
    console.log(JSON.stringify(getReponseAPi))
    return this.http.post(`${this.API}`, getReponseAPi, options)
  }
}
