import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winning-list',
  templateUrl: './winning-list.component.html',
  styleUrls: ['./winning-list.component.scss']
})
export class WinningListComponent implements OnInit {
  public columnList = [
    "ID", "Race Code", "Date & Time", "Action"
  ];

  public rowData = [
    [{ text: 'Bet 1 new' }, { text: '267 Galle Rd, Colombo 00300' },
    { text: 'Kasun Abaywardana' }, { text: '0 789 564 591' },
    { text: 'fa fa-trash', isIcon: true, expand: true }],
    [{ text: 'Bet 1 new' }, { text: '267 Galle Rd, Colombo 00300' },
    { text: 'Kasun Abaywardana' }, { text: '0 789 564 591' },
    { text: 'fa fa-trash', isIcon: true, expand: true }]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
