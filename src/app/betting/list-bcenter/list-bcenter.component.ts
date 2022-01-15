import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bcenter',
  templateUrl: './list-bcenter.component.html',
  styleUrls: ['./list-bcenter.component.scss']
})
export class ListBcenterComponent implements OnInit {

  public columnList = [
    "Name", "Address", "Responsible Person", "Contact NO", "Action"
  ];

  public rowData = [
    [{ text: 'Bet 1 new' }, { text: '267 Galle Rd, Colombo 00300' },
    { text: 'Kasun Abaywardana' }, { text: '0 789 564 591' },
    { text: 'fa fa-trash', isIcon: true }],
    [{ text: 'Bet 1 new' }, { text: '267 Galle Rd, Colombo 00300' },
    { text: 'Kasun Abaywardana' }, { text: '0 789 564 591' },
    { text: 'fa fa-trash', isIcon: true }]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
