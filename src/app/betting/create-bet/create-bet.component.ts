import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedApiService } from '../../shared/shared-api.service';
import { Center } from '../betting.model';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-create-bet',
  templateUrl: './create-bet.component.html',
  styleUrls: ['./create-bet.component.scss']
})
export class CreateBetComponent implements OnInit {
  public horses: FormArray;
  public createBet: FormGroup;
  public centerList: Array<Center>;

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
      horses: this.formBuilder.array([this.betHorseForm()])
    });

  }

  addHorse(i) {
    if (this.createBet.controls.horses['controls'].length < 5) {
      this.horses = this.createBet.get('horses') as FormArray;
      this.horses.push(this.betHorseForm());
    } else {
      // Error alert
    }
    
  }

  betHorseForm(): FormGroup {
    return this.formBuilder.group({
      horseCode: ['', [Validators.required]],
      raceCode: ['', [Validators.required]],
      side: ['', [Validators.required]],
    })
  }

  resetForm() {

  }

  getCenters() {
    this.sharedApiService.getCenterList().subscribe((res : any) => {
      if (res.Success) {
        this.centerList = Center.list(res.data);
      } else {

      }
    }, err => {

    });
  }



  get customerCode() { return this.createBet.get('customerCode'); }
  get bettingDate() { return this.createBet.get('bettingDate'); }
  get centerId() { return this.createBet.get('centerId'); }
  get bettingAmount() { return this.createBet.get('bettingAmount'); }
  get option() { return this.createBet.get('option'); }

}
