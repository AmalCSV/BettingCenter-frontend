import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  public columnList = [
    "First Name", "Last Name", "User Name", "Action"
  ];

  public rowData = [
    [{ text: 'Kasun' }, { text: 'Abaywardana' },
    { text: 'kasun12' }, { text: 'fa fa-trash', isIcon: true }],
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginReq = this.userForm.value;

  }

  resetForm() {
    this.userForm.reset();
  }

  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get userName() { return this.userForm.get('userName'); }
  get password() { return this.userForm.get('password'); }

}
