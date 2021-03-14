import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  enrolleeList = [];
//Define the Base url
public baseUrl = "http://localhost:8080/";
  
//Define the endpoint
url = "enrollees";

  constructor(private http: HttpClient) { }

  getEnrollees(): Observable<any> {
    return this.http.get(this.baseUrl + this.url);
  }

  getEnrolleeDetails(id): Observable<any> {
    return this.http.get(this.baseUrl + this.url + '/' + id);
  }
  
  updateEnrollee(id,detail): Observable<any> {
    return this.http.put(this.baseUrl + this.url + '/' + id,detail);
  }

}
