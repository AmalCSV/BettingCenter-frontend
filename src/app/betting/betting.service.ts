import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../app.constant';
import { Center } from './betting.model';

@Injectable({
  providedIn: 'root'
})
export class BettingService {

  constructor(private http: HttpClient) { }

  getCenterList(){
    return this.http.get(API_END_POINTS.READ_CENTERS);
  }

  createCenter(user: Center){
    return this.http.post(API_END_POINTS.CREATE_CENTERS, user);
  }

  updateCenter(user: any) {
    return this.http.post(API_END_POINTS.UPDATE_CENTERS, user);
  }

  searchCenter(id) {
    return this.http.get(API_END_POINTS.SEARCH_CENTERS + id);
  }

}
