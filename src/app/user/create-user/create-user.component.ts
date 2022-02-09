import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public userList: Array<User>;

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  onSubmit() {
    const userForm = this.userForm.valid;
    if (userForm) {
      this.createUser();
    } else {

    }
  }

  resetForm() {
    this.userForm.reset();
  }

  getUserList() {
    this.userService.getUserList().subscribe((res: any) => {
      if (res.success) {
        this.userList = User.list(res.data);
        console.log(this.userList);
      } else {
        console.log("Get user list error", JSON.stringify(res.data));
      }
    }, err => {
      console.log("Get user list error", JSON.stringify(err));
    })
  }

  createUser() {
    const userData = this.userForm.value;
    this.userService.createUser(new User(userData)).subscribe((res: any) => {
      if(res.success) {
        this.getUserList();
      } else {
        console.log("Create user error", JSON.stringify(res.data));
      }
    }, err => {
      console.log("Create user error", JSON.stringify(err));
    });
  }

  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get userName() { return this.userForm.get('userName'); }
  get password() { return this.userForm.get('password'); }

}
