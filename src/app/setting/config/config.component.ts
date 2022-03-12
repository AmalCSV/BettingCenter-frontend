import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public settingForm = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tax: new FormControl('', [Validators.required]),
  });

  public settingTime = new FormGroup({
    endTime: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  resetForm() {

  }

  updateForm(attribute) {

  }

  get companyName() { return this.settingForm.get('companyName'); }
  get address() { return this.settingForm.get('address'); }
  get tax() { return this.settingForm.get('tax'); }

  get endTime() { return this.settingTime.get('endTime'); }

}
