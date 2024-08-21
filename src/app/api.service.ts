import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getFrame(prompt: string, method: string, video: File): Observable<any> {
    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('method', method);
    formData.append('video', video);

    return this.http.post<any>(this.apiURL + '/search', formData);
  }
}
