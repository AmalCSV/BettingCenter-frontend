import { AlertAfService } from './../../shared/alert-af.service';
import { Race } from './../betting.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedApiService } from '../../shared/shared-api.service';
import { Center } from '../betting.model';
import { BettingService } from '../betting.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  public raceList: Array<Race>;
  public displayRaceList: Array<Race>;
  public updateObj: Race;

  public columnList = [
    "Name", "Identifier", "Date", "Description", "Actions"
  ];

  public searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  public createRaceForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    identifier: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private sharedApiService: SharedApiService,
    protected alertAfService: AlertAfService,
    private bettingService: BettingService) { }

  ngOnInit(): void {
    this.getRace();
  }

  getRace() {
    this.sharedApiService.getRace().subscribe((res: any) => {
      if (res.Success) {
        this.raceList = Race.list(res.data);
        this.displayRaceList = this.raceList;
      } else {
        console.log("Get center list error", JSON.stringify(res.data));
      }
    }, err => {
      console.log("Get center list error", JSON.stringify(err));
    })
  }

  editRace(event) {
    this.createRaceForm.patchValue(event);
    this.updateObj = event;
  }

  search() {

    const search = this.searchForm.value.searchText.toLocaleLowerCase();
    const name = this.raceList.filter(f => {
      const term = f.name ? f.name.toLocaleLowerCase() : '';
      if (term.includes(search)) {
        return f;
      }
    });

    const person = this.raceList.filter(f => {
      const term = f.name ? f.name.toLocaleLowerCase() : '';
      if (term.includes(search)) {
        return f;
      }
    });

    if (search === '') {
      this.displayRaceList = this.raceList;
    } else if (name.length > 0) {
      this.displayRaceList = name;
    } else {
      this.displayRaceList = person;
    }
  }

  reFill() {
    const search = this.searchForm.value.searchText.toLocaleLowerCase();
    if (search === '') {
      this.displayRaceList = this.raceList;
    }
  }

  onSubmit() {
    if (!this.updateObj) {
      const center = this.createRaceForm.value;
      this.bettingService.createCenter(center).subscribe(res => {
        this.getRace();
        this.createRaceForm.reset();
        this.alertAfService.success("Successfully added the Race", {
          autoClose: true,
          keepAfterRouteChange: false
        });
      }, err => {
        this.alertAfService.error('Server Error' + JSON.stringify(err), {
          autoClose: true,
          keepAfterRouteChange: false
        });
      });
    } else {
      this.updateRace();
    }
  }

  resetForm() {
    this.createRaceForm.reset();
    this.updateObj = null;
  }

  updateRace() {
    let updateFormData = new Center(this.createRaceForm.value);
    updateFormData.id = this.updateObj.id;
    this.bettingService.updateRace(updateFormData).subscribe((res: any) => {
      if (res && res.message) {
        this.createRaceForm.reset();
        this.getRace();
      } else {
        this.alertAfService.error(JSON.stringify(res), {
          autoClose: true,
          keepAfterRouteChange: false
        });
      }
    }, err => {
      this.alertAfService.error('Server Error' + JSON.stringify(err), {
        autoClose: true,
        keepAfterRouteChange: false
      });
    });
  }

  get name() { return this.createRaceForm.get('name'); }
  get identifier() { return this.createRaceForm.get('identifier'); }
  get date() { return this.createRaceForm.get('date'); }
  get description() { return this.createRaceForm.get('description'); }

}
