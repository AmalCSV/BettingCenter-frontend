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

  public userList = [
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"},
    {firstName: "kasun" , lastName: "Abaywardana" , userName: "kasun12ug"}
  ]

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
