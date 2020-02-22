import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperDataService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getListObject(url:String): Observable<any>{
    return this.http.get(this.baseUrl + url);
  }
  createObject(obj: any, url: string): Observable<any> {
    return this.http.post(this.baseUrl + url, obj);
  }
  getListObjectByBrand(category:String,brand:string): Observable<any>{
    return this.http.get(this.baseUrl + category + "s/" + brand);
  }
}
