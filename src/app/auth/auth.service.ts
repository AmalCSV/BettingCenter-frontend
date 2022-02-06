import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  login(loginReq){
    return this.http.post(API_END_POINTS.LOGIN, loginReq);
  }

  testGetApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
