import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
    // public JwtHelperService: JwtHelperService
  }

  public isAuthenticated(): boolean {
    const authData: any = JSON.parse(sessionStorage.getItem('authData'));
    const status = authData ? true : false;
    return status
    // return !this.JwtHelperService.isTokenExpired(token);
  }

}