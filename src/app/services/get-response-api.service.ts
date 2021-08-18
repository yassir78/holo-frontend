import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetResponseApi } from '../models/getResponseApi';

@Injectable({
  providedIn: 'root'
})
export class GetResponseApiService {
  private readonly API = "https://api.getresponse.com/v3/contacts"
  constructor(private http: HttpClient) { }

  saveContact(getReponseAPi: GetResponseApi) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'X-Auth-Token': `api-key ${environment.getResponseApiKey}`
    });
    let options = { headers: headers };
    console.log(options)
    console.log(JSON.stringify(getReponseAPi))
    return this.http.post(`${this.API}`, JSON.stringify(getReponseAPi), options)
  }
}
