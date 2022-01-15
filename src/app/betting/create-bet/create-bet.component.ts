import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.scss']
})
export class CreateBetComponent implements OnInit {
  public createBet = new FormGroup({
    customerCode: new FormControl('', [Validators.required]),
    bettingDate: new FormControl('', [Validators.required]),
    centerId: new FormControl('Select a betting center..', [Validators.required]),
    bettingAmount: new FormControl('', [Validators.required]),
    option: new FormControl('Select a option..', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  resetForm() {

  }

  get customerCode() { return this.createBet.get('customerCode'); }
  get bettingDate() { return this.createBet.get('bettingDate'); }
  get centerId() { return this.createBet.get('centerId'); }
  get bettingAmount() { return this.createBet.get('bettingAmount'); }
  get option() { return this.createBet.get('option'); }

}
