import { AlertAfService } from './../../shared/alert-af.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BettingService } from '../betting.service';
import { Center } from '../betting.model';
import { Router } from '@angular/router';
import { SharedApiService } from '../../shared/shared-api.service';

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

  constructor(private bettingService: BettingService,
    private router: Router,
    private sharedApiService: SharedApiService,
    protected alertAfService: AlertAfService) { }

  ngOnInit(): void {
    this.getCenters();
  }

  getCenters() {
    this.sharedApiService.getCenterList().subscribe((res: any) => {
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
    sessionStorage.setItem('updateCenter', JSON.stringify(event));
    this.router.navigate(['betting/create-center']);
  }

  search() {
    // ALERT CALL
    //   this.alertAfService.success("Success", {
    //     autoClose: true,
    //     keepAfterRouteChange: false
    // });

    const search = this.searchForm.value.searchText.toLocaleLowerCase();

    const name = this.centerList.filter(f => {
      const term = f.name ? f.name.toLocaleLowerCase() : '';
      if (term.includes(search)) {
        return f;
      }
    });

    const person = this.centerList.filter(f => {
      const term = f.contactPerson ? f.contactPerson.toLocaleLowerCase() : '';
      if (term.includes(search)) {
        return f;
      }
    });

    if (search === '') {
      this.displayCenterList = this.centerList;
    } else if (name.length > 0) {
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
