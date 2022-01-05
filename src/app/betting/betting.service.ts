import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BettingService {

  constructor(private http: HttpClient) { }

  getExistingBetting(){
    return this.http.get('url');
  }

}
