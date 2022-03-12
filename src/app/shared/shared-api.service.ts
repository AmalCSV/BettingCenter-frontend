import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(private http: HttpClient) { }

  getCenterList(){
    return this.http.get(API_END_POINTS.READ_CENTERS);
  }

  getRace(){
    return this.http.get(API_END_POINTS.READ_RACE);
  }

  getEndTime() {
    return this.http.get(API_END_POINTS.SETTING_CLOSING_TIME);
  }
}
