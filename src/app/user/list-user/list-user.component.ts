import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public userList: Array<User>;

  public columnList = [
    "First Name", "Last Name", "User Name", "Action"
  ];

  public rowData = [
    [{ text: 'Kasun' }, { text: 'Abaywardana' },
    { text: 'kasun12' }, { text: 'fa fa-trash', isIcon: true }],
    
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {;
    this.getUserList()
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

}
