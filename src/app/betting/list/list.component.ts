import { Component, OnInit } from '@angular/core';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private bettingService: BettingService) { }

  ngOnInit(): void {
    this.getPlacedBetts();
  }

  getPlacedBetts() {
    this.bettingService.getExistingBetting().subscribe((res : any) => {
      if (res.success) {

      } else {

      }
    }, err => {

    });
  }

}
