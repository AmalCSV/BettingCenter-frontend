import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../app.constant';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(){
    return this.http.get(API_END_POINTS.GET_USERS);
  }

  createUser(user: User){
    return this.http.post(API_END_POINTS.CREATE_USERS, user);
  }

  updateUser(user: any) {
    return this.http.post(API_END_POINTS.UPDATE_USERS, user);
  }

  searchUser(id) {
    return this.http.get(API_END_POINTS.SEARCH_USERS + id);
  }
}
