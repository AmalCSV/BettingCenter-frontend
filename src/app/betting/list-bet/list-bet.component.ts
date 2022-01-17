import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bet',
  templateUrl: './list-bet.component.html',
  styleUrls: ['./list-bet.component.scss']
})
export class ListBetComponent implements OnInit {

  public columnList = [
    "Name", "Address", "Responsible Person", "Contact NO", "Action"
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
