import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() columnList: Array<any>;
  @Input() rowData: Array<any>;
  @Output() deleteItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  expandOption(index) {

  }

  delete(item) {
    this.deleteItem.emit(item);
  }

}
