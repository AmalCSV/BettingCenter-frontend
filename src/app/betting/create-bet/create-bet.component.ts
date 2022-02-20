import { BettingService } from './../betting.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedApiService } from '../../shared/shared-api.service';
import { Amounts, Center, Horse } from '../betting.model';
import { Betts } from './../betting.model';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.scss']
})
export class CreateBetComponent implements OnInit {
  @ViewChild('horseCode') horseCodeInput: ElementRef;

  public horses: FormArray;
  public horseOptions: FormGroup;
  public createBet: FormGroup;

  public centerList: Array<Center>;
  public horseRaceList: any = [];
  public lineAmount: any = [];
  public betts: any = [];

  public sideOption = ["Front", "Back"];

  constructor(private formBuilder: FormBuilder, private sharedApiService: SharedApiService,
    private bettingService: BettingService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getCenters();
  }

  onSubmit() {
    const formData = this.createBet.value;
    const user = sessionStorage.getItem('authData');
    if (user && formData) {
      let req = {
        bets : this.betts
      }
      Object.assign(req, formData);
      req['createdBy'] = '31';
      req['amount'] = formData.bettingAmount;
      this.bettingService.createBett(req).subscribe((res: any) => {
        if (res.success) {
          console.log(res, 'success');
          this.resetWindow();
        } else {
          console.log(res, 'err 1');
        }
      }, err => {
        console.log(err, 'err 2');
      });
    }

  }

  initForm() {
    const date = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
    this.createBet = this.formBuilder.group({
      customer: ['', [Validators.required]],
      bettingDate: ['', [Validators.required]],
      bettingCenterId: ['', [Validators.required]],
      bettingAmount: ['', [Validators.required]],
      amountTypeId: [],
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
      const dublicate = this.horseRaceList.filter(f => {
        if(f.horseCode == data.horseCode && f.raceCode == data.raceCode) {
          return f;
        }
      });
      if (dublicate.length === 0) {
        this.horseRaceList.push(new Horse(data));
      }
      this.resetForm(['horseCode', 'raceCode'], this.horseOptions);
    }
  }

  addAmounts() {
    const formData = this.horseOptions.value;
    if (formData.amountTypeId && formData.amount && this.lineAmount.length < 2) {
      const data = {
        amountTypeId: formData.amountTypeId,
        amount: formData.amount
      };
      const dublicate = this.lineAmount.filter(f => {
        if(f.amountTypeId == data.amountTypeId) {
          f.amount = data.amount;
          return f;
        }
      });
      if (dublicate.length === 0) {
        this.lineAmount.push(new Amounts(data));
      } else {
        this.lineAmount = this.lineAmount.map(m => {
          if(m.amountTypeId == data.amountTypeId) {
            m.amount = data.amount;
            return m;
          } else {
            return m;
          }
        });
      }

      this.resetForm(['amount'], this.horseOptions)
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

  addToBettList() {
    this.betts.push(new Betts({bettingHorse: this.horseRaceList, amounts: this.lineAmount}));
    this.clearBets();
  }

  deleteBett(index) {
    this.betts.splice(index,1)
  }

  resetWindow() {
    this.resetForm([], this.horseOptions, true);
    this.resetForm([], this.createBet, true);
    this.betts = [];
    this.horseRaceList = [];
    this.lineAmount = [];
    this.horseOptions.patchValue({amountTypeId: 1});
  }

  clearBets() {
    this.horseRaceList = [];
    this.lineAmount = [];
  }

  get customer() { return this.createBet.get('customer'); }
  get bettingDate() { return this.createBet.get('bettingDate'); }
  get bettingCenterId() { return this.createBet.get('bettingCenterId'); }
  get bettingAmount() { return this.createBet.get('bettingAmount'); }
  get amountTypeId0() { return this.createBet.get('amountTypeId'); }

  get horseCode() { return this.horseOptions.get('horseCode'); }
  get raceCode() { return this.horseOptions.get('raceCode'); }
  get amountTypeId() { return this.horseOptions.get('amountTypeId'); }
  get amount() { return this.horseOptions.get('amount'); }

}
