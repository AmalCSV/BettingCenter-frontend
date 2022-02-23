import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public userList: Array<User>;
  public displayUserList: Array<User>;

  public columnList = [
    "First Name", "Last Name", "User Name", "Action"
  ];

  public searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {;
    this.getUserList()
  }

  getUserList() {
    this.userService.getUserList().subscribe((res: any) => {
      if (res.success) {
        this.userList = User.list(res.data);
        this.displayUserList = this.userList;
        console.log(this.userList);
      } else {
        console.log("Get user list error", JSON.stringify(res.data));
      }
    }, err => {
      console.log("Get user list error", JSON.stringify(err));
    })
  }

  deleteUser(event) {
    const selectedUser = new User(event);
    const deleteUser = {
      id: selectedUser.id,
      userName: selectedUser.userName,
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName,
      isActive: false
    }
    deleteUser.isActive = false;
    this.userService.updateUser(deleteUser).subscribe((res: any) => {
      console.log(res, "success");
      this.getUserList();
    }, err => {

    });
  }

  search() {
    const search = this.searchForm.value.searchText.toLocaleLowerCase();

    const firstName = this.userList.filter(f => {
      const term = f.firstName ? f.firstName.toLocaleLowerCase(): '';
      if (term.includes(search)) {
        return f;
      }
    });

    const lastName = this.userList.filter(f => {
      const term = f.lastName ? f.lastName.toLocaleLowerCase(): '';
      if (term.includes(search)) {
        return f;
      }
    });

    const userName = this.userList.filter(f => {
      const term = f.userName ? f.userName.toLocaleLowerCase(): '';
      if (term.includes(search)) {
        return f;
      }
    });

    if (search === '') {
      this.displayUserList = this.userList;
    } else if (userName.length>0) {
      this.displayUserList = firstName;
    } else if (firstName.length > 0) {
      this.displayUserList = lastName;
    } else {
      this.displayUserList = userName;
    }
  }

  reFill() {
    const search = this.searchForm.value.searchText.toLocaleLowerCase();
    if (search === '') {
     this.displayUserList = this.userList;
    }
  }

}
