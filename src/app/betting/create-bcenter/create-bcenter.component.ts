import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedApiService } from '../../shared/shared-api.service';
import { Center } from '../betting.model';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-create-bcenter',
  templateUrl: './create-bcenter.component.html',
  styleUrls: ['./create-bcenter.component.scss']
})
export class CreateBcenterComponent implements OnInit {
  public centerList: Array<Center>;
  public displayCenterList: Array<Center>;
  public updateObj: Center;

  public columnList = [
    "Name", "Address", "Responsible Person", "Contact NO", "Action"
  ];

  public searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  public createCenter = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required]),
    contactPerson: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('07', [Validators.required, Validators.minLength(9), Validators.maxLength(10)])
  });

  constructor(private bettingService: BettingService, private sharedApiService: SharedApiService) { }


  ngOnInit(): void {
    this.getCenters();
    this.fillPreviousData();
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

  editCenter(event) {
    this.createCenter.patchValue(event);
    this.updateObj = event;
  }

  search() {

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

  onSubmit() {
    if (!this.updateObj) {
      const center = this.createCenter.value;
      this.bettingService.createCenter(center).subscribe(res => {
        this.getCenters();
        this.createCenter.reset();
      }, err => {

      });
    } else {
      this.updateCenter();
    }
  }

  resetForm() {
    this.createCenter.reset();
    this.updateObj = null;
  }

  updateCenter() {
    let updateFormData = new Center(this.createCenter.value);
    updateFormData.id = this.updateObj.id;
    this.bettingService.updateCenter(updateFormData).subscribe((res: any) => {
      if (res && res.message) {
        this.createCenter.reset();
        this.getCenters();
      } else {

      }
    }, err => {

    });
  }

  fillPreviousData() {
    const previousData = sessionStorage.getItem('updateCenter');
    if (previousData) {
      const parseData = JSON.parse(previousData);
      this.updateObj = parseData;
      this.createCenter.patchValue(parseData);
      sessionStorage.setItem('updateCenter', null);
    }
  }

  get name() { return this.createCenter.get('name'); }
  get address() { return this.createCenter.get('address'); }
  get contactPerson() { return this.createCenter.get('contactPerson'); }
  get phone() { return this.createCenter.get('phone'); }

}
