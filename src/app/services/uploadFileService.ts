import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private readonly API: any = environment.base_url

  constructor(private http: HttpClient) { }
  uploadImage(file: File) {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.API + '/upload/image', data, {
      reportProgress: true
    });
    return this.http.request(newRequest);
    //return this.http.post(this.API+'/upload/image', data);

  }
  uploadVideo(file: File) {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.API + '/upload/video', data, {
      reportProgress: true
    });
    return this.http.request(newRequest);
  }
  uploadFile(file: File) {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.API + '/upload/document', data, {
      reportProgress: true
    });
    return this.http.request(newRequest);
    //return this.http.post(this.API+'/upload/image', data);

  }
  deleteFile(fileUrl: string, productImageId: number) {
    return this.http.post<any>(`${this.API}/deleteFile`, {
      fileName: fileUrl,
      productImageId: productImageId
    });
  }



  public async uploadFiles(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    return await this.http.post(this.API + '/upload/image', formData);

  }

}