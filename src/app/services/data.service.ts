import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'api/items';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getChart1(): Observable<any> {
    return this.http.get('api/chart1');
  }

  getChart2(): Observable<any> {
    return this.http.get('api/chart2');
  }

  getChart3(): Observable<any> {
    return this.http.get('api/chart3');
  }

  getChart4(): Observable<any> {
    return this.http.get('api/chart4');
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  putData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
