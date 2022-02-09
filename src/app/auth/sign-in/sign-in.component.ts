import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginError: string;
  
  public loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required,Validators.minLength(5)]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)])
  });

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginReq = this.loginForm.value;
    this.authService.login(loginReq).subscribe((res: any) => {
      if (res.success) {
        sessionStorage.setItem('authData', JSON.stringify(res.data))
        this.router.navigate(['dashboard'])
      } else {
        // Handel the API error
      }
    }, error => {
      // Handel the server error
    });

    /**
     *  Sample API call to 
     *  Test Loader screen
     * */ 
    // this.authService.testGetApi().subscribe(res => {
    //   console.log(res);
    // }, error => {
    //   console.log(error);
    // })
  }

  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }

}
