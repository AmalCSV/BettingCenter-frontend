export class Center {
  id?: number;
  name: string;
  address: string;
  contactPerson: string;
  phone: string;
  keyList?: Array<string>;
  isActive?: number;
  updateIndex?: number;

  constructor(req: any) {
    this.id = (req || {}).id;
    this.name = (req || {}).name;
    this.address = (req || {}).address;
    this.contactPerson = (req || {}).contactPerson;
    this.phone = (req || {}).phone;
    this.keyList = ['name', 'address', 'contactPerson', 'phone', 'status'];
    this.isActive = 1;
    this.updateIndex = 4;
  }

  static list(data: any): Array<Center> {
    return data ? data.map(m => { return new Center(m) }) : []
  }
}

export class Horse {
  horseCode: string;
  raceCode: string;
  constructor(obj) {
    this.horseCode = (obj || {}).horseCode;
    this.raceCode = (obj || {}).raceCode;
  }
}

export class Amounts {
  amountTypeId: number;
  amount: number;
  constructor(obj) {
    this.amountTypeId = (obj || {}).amountTypeId;
    this.amount = (obj || {}).amount;
  }
}

export class Betts {
  bettingHorse: Array<Horse>;
  amounts: Array<Amounts>

  constructor(obj){
    this.bettingHorse = (obj || {}).bettingHorse;
    this.amounts = (obj || {}).amounts
  }
}
