import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private bettingService: BettingService) { }

  ngOnInit(): void {
    this.getCenters();
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
    const center = this.createCenter.value;
    this.bettingService.createCenter(center).subscribe(res => {
      this.getCenters();
    }, err => {

    });
  }

  resetForm() {
    this.createCenter.reset();
  }

  get name() { return this.createCenter.get('name'); }
  get address() { return this.createCenter.get('address'); }
  get contactPerson() { return this.createCenter.get('contactPerson'); }
  get phone() { return this.createCenter.get('phone'); }

}
