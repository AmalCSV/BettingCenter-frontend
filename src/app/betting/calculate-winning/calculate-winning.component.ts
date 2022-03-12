import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-winning',
  templateUrl: './calculate-winning.component.html',
  styleUrls: ['./calculate-winning.component.scss']
})
export class CalculateWinningComponent implements OnInit {

  public calulateWinningForm = new FormGroup({
    bittingDate: new FormControl('', [Validators.required]),
    executingDate: new FormControl('', [Validators.required]),
    executingTime: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  resetForm() {

  }

  get bittingDate() { return this.calulateWinningForm.get('bittingDate'); }
  get executingDate() { return this.calulateWinningForm.get('executingDate'); }
  get executingTime() { return this.calulateWinningForm.get('executingTime'); }
  get startTime() { return this.calulateWinningForm.get('startTime'); }
  get endTime() { return this.calulateWinningForm.get('endTime'); }

}
