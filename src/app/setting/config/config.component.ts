import { SettingService } from './../setting.service';
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
    closingTime: new FormControl('', [Validators.required]),
    bettingDate: new FormControl(new Date(), [Validators.required]),
  });

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {

  }

  resetForm() {

  }

  updateForm(attribute) {
    const formData = this.settingForm.value;
    formData['extendedJson'] = '';
    this.settingService.createSetting(formData).subscribe(res => {
      if (res) {

      } else {

      }
    }, error => {
      console.log(error)
    });
  }

  updateClosingTime() {
    const formData = this.settingTime.value;
    const authData = JSON.parse(sessionStorage.getItem('authData'));
    formData['CreatedBy'] = authData.id;
    this.settingService.bettingClosing(formData).subscribe(res => {

    }, error => {

    });
  }

  get companyName() { return this.settingForm.get('companyName'); }
  get address() { return this.settingForm.get('address'); }
  get tax() { return this.settingForm.get('tax'); }

  get closingTime() { return this.settingTime.get('closingTime'); }
  get bettingDate() { return this.settingTime.get('bettingDate'); }

}
