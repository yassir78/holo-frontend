import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
private readonly API:any = environment.base_url

  constructor(private http: HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>>{
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.API+'/upload/image', data, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(newRequest);

  }
  deleteFile(fileUrl:string , productImageId:number){
   return this.http.post<any>(`${this.API}/deleteFile`,{
    fileName:fileUrl,
    productImageId:productImageId
    });
  }
}