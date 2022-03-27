import { Time } from './../setting.model';
import { SettingService } from './../setting.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closing-time',
  templateUrl: './closing-time.component.html',
  styleUrls: ['./closing-time.component.scss']
})
export class ClosingTimeComponent implements OnInit {

  public settingTime = new FormGroup({
    closingTime: new FormControl('', [Validators.required]),
    bettingDate: new FormControl(new Date(), [Validators.required]),
  });

  public columnList = [
    "Date", "Closing Time"
  ];

  public displayTimes: any;

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.getTimes();

  }

  getTimes() {
    this.settingService.bettingClosingTimes().subscribe((res: any) => {
      if (res.Success) {
        this.displayTimes = Time.list(res.data);
      }
    }, error => {

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

  get closingTime() { return this.settingTime.get('closingTime'); }
  get bettingDate() { return this.settingTime.get('bettingDate'); }

}
