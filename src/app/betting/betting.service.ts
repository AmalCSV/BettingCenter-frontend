import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../app.constant';
import { Center } from './betting.model';

@Injectable({
  providedIn: 'root'
})
export class BettingService {

  constructor(private http: HttpClient) { }

  createCenter(center: Center){
    return this.http.post(API_END_POINTS.CREATE_CENTERS, center);
  }

  updateCenter(center: any) {
    return this.http.post(API_END_POINTS.UPDATE_CENTERS, center);
  }

  searchCenter(id) {
    return this.http.get(API_END_POINTS.SEARCH_CENTERS + id);
  }

  createBett(bett: any) {
    return this.http.post(API_END_POINTS.CREATE_BETT, bett);
  }

}
