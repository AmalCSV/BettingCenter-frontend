import { API_END_POINTS } from './../app.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  createSetting(setting: any) {
    return this.http.post(API_END_POINTS.SETTING_CREATE, setting);
  }

  bettingClosing(setting: any) {
    return this.http.post(API_END_POINTS.CREATE_SETTING_CLOSING, setting);
  }

  bettingClosingTimes() {
    return this.http.get(API_END_POINTS.GET_SETTING_CLOSING);
  }

}
