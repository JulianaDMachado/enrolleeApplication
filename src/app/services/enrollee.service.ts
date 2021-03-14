import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  enrolleeList = [];
  //Define the Base url
  public baseUrl = environment.baseUrl;

  //Define the endpoint
  url = "enrollees";

  constructor(private http: HttpClient) { }

  getEnrollees(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + this.url);
  }

  getEnrolleeDetails(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + this.url + '/' + id);
  }

  updateEnrollee(id, detail): Observable<User> {
    return this.http.put<User>(this.baseUrl + this.url + '/' + id, detail);
  }

}
