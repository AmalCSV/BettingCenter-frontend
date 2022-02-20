import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedApiService } from '../../shared/shared-api.service';
import { Center, Horse, Amounts } from '../betting.model';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.scss']
})
export class CreateBetComponent implements OnInit {
  public horses: FormArray;
  public horseOptions: FormGroup;
  public createBet: FormGroup;

  public centerList: Array<Center>;
  public horseRaceList: any = [];
  public lineAmount: any = [];

  public sideOption = ["Front", "Back"];

  constructor(private formBuilder: FormBuilder, private sharedApiService: SharedApiService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getCenters();
  }

  onSubmit() {

  }

  initForm() {
    this.createBet = this.formBuilder.group({
      customerCode: this.formBuilder.control('', [Validators.required]),
      bettingDate: this.formBuilder.control('', [Validators.required]),
      centerId: this.formBuilder.control('Select a betting center..', [Validators.required]),
      bettingAmount: this.formBuilder.control('', [Validators.required]),
      option: this.formBuilder.control('Select a option..', [Validators.required]),
    });

    this.horseOptions = this.formBuilder.group({
      horseCode: [''],
      raceCode: [''],
      amountTypeId: [1],
      amount: []
    })

  }

  getCenters() {
    this.sharedApiService.getCenterList().subscribe((res: any) => {
      if (res.Success) {
        this.centerList = Center.list(res.data);
      } else {

      }
    }, err => {

    });
  }

  addHorseRace() {
    const formData = this.horseOptions.value;
    if (formData.horseCode && formData.raceCode) {
      const data = {
        horseCode: formData.horseCode,
        raceCode: formData.raceCode
      };
      this.horseRaceList.push(new Horse(data));
      this.resetForm(['horseCode', 'raceCode'], this.horseOptions)
    }
  }

  addAmounts() {
    const formData = this.horseOptions.value;
    if (formData.amountTypeId && formData.amount) {
      const data = {
        amountTypeId: formData.amountTypeId,
        amount: formData.amount
      };
      this.lineAmount.push(new Amounts(data));
      this.resetForm(['amount', 'amountTypeId'], this.horseOptions)
    }
  }

  resetForm(fieldNames: Array<string>, formName: FormGroup, isAll?: boolean) {
    if (!isAll) {
      fieldNames.forEach(f => {
        formName.controls[f].reset('')
      });
    } else {
      formName.reset();
    }
  }

  resetWindow() {
    this.resetForm([], this.horseOptions, true);
    this.resetForm([], this.createBet, true);
  }

  get customerCode() { return this.createBet.get('customerCode'); }
  get bettingDate() { return this.createBet.get('bettingDate'); }
  get centerId() { return this.createBet.get('centerId'); }
  get bettingAmount() { return this.createBet.get('bettingAmount'); }
  get option() { return this.createBet.get('option'); }

  get horseCode() { return this.horseOptions.get('horseCode'); }
  get raceCode() { return this.horseOptions.get('raceCode'); }
  get amountTypeId() { return this.horseOptions.get('amountTypeId'); }
  get amount() { return this.horseOptions.get('amount'); }

}
