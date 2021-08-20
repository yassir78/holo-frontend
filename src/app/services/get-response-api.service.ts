import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetResponseApi } from '../models/getResponseApi';
interface MailChimpResponse {
  result: string;
  msg: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetResponseApiService {
  private mailChimpEndpoint = 'https://gmail.us5.list-manage.com/subscribe/post-json?u=1f7e6ec27ba59da9234d01be0&id=1a3fdfa650&';

  constructor(private http: HttpClient) { 
  
   }

  saveContact(getReponseAPi: GetResponseApi) {
    const params = new HttpParams()
    .set('FNAME', getReponseAPi.firstName)
    .set('LNAME', getReponseAPi.lastName)
    .set('EMAIL', getReponseAPi.email)
    .set('PNUMBER',getReponseAPi.phone)
    .set('subscribe','Subscribe')
  console.log(params);
  const mailChimpUrl = this.mailChimpEndpoint + params.toString();

  return  this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c');
  
  }
}
