import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BettingService } from '../betting.service';
import { Center } from '../betting.model';

@Component({
  selector: 'app-list-bcenter',
  templateUrl: './list-bcenter.component.html',
  styleUrls: ['./list-bcenter.component.scss']
})
export class ListBcenterComponent implements OnInit {

  public centerList: Array<Center>;
  public displayCenterList: Array<Center>;

  public columnList = [
    "Name", "Address", "Responsible Person", "Contact NO", "Action"
  ];

  public searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  constructor(private bettingService: BettingService) { }

  ngOnInit(): void {;
    this.getCenters()
  }

  getCenters() {
    this.bettingService.getCenterList().subscribe((res: any) => {
      if (res.Success) {
        this.centerList = Center.list(res.data);
        this.displayCenterList = this.centerList;
      } else {
        console.log("Get center list error", JSON.stringify(res.data));
      }
    }, err => {
      console.log("Get center list error", JSON.stringify(err));
    })
  }

  updateCenter(event) {
   const update = {};
    this.bettingService.updateCenter(update).subscribe((res: any) => {
      console.log(res, "success");
      this.getCenters();
    }, err => {
    });
  }

  search() {
    const search = this.searchForm.value.searchText.toLocaleLowerCase();

    const name = this.centerList.filter(f => {
      const term = f.name ? f.name.toLocaleLowerCase(): '';
      if (term.includes(search)) {
        return f;
      }
    });

    const person = this.centerList.filter(f => {
      const term = f.contactPerson ? f.contactPerson.toLocaleLowerCase(): '';
      if (term.includes(search)) {
        return f;
      }
    });

    if (search === '') {
      this.displayCenterList = this.centerList;
    } else if (name.length>0) {
      this.displayCenterList = name;
    } else {
      this.displayCenterList = person;
    }
  }

  reFill() {
    const search = this.searchForm.value.searchText.toLocaleLowerCase();
    if (search === '') {
     this.displayCenterList = this.centerList;
    }
  }

}
