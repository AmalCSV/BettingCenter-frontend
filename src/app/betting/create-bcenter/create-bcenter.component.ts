import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bcenter',
  templateUrl: './create-bcenter.component.html',
  styleUrls: ['./create-bcenter.component.scss']
})
export class CreateBcenterComponent implements OnInit {

  public createCenter = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required]),
    responsiblePerson: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contactNumber: new FormControl('07', [Validators.required, Validators.minLength(9),Validators.maxLength(10)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginReq = this.createCenter.value;

  }

  resetForm() {
    this.createCenter.reset();
  }

  get name() { return this.createCenter.get('name'); }
  get address() { return this.createCenter.get('address'); }
  get responsiblePerson() { return this.createCenter.get('responsiblePerson'); }
  get contactNumber() { return this.createCenter.get('contactNumber'); }

}
