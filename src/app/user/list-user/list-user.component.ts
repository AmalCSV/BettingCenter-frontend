import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @Input() userList;

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

}
