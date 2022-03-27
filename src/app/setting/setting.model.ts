export class Time {
  id: number;
  bettingDate: string;
  closingTime: string;
  CreatedBy: number;
  createdDate: string;
  keyList: Array<string>;

  constructor(obj) {
    this.id = (obj|| {}).id;
    this.bettingDate = (obj|| {}).bettingDate;
    this.closingTime = (obj|| {}).closingTime;
    this.CreatedBy = (obj|| {}).CreatedBy;
    this.createdDate = (obj|| {}).createdDate;
    this.keyList = ['bettingDate', 'closingTime'];
  }

  static list(data: any): Array<Time> {
    return data ? data.map(m => { return new Time(m) }) : []
  }
}
