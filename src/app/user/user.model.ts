export class User {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  password?: string;
  keyList?: Array<string>;
  deleteIndex?: number;

  constructor(req: any){
    this.id = (req || {}).id;
    this.firstName = (req || {}).firstName;
    this.lastName = (req || {}).lastName;
    this.userName = (req || {}).userName;
    this.password = (req || {}).password;
    this.keyList = ['firstName', 'lastName', 'userName', 'status'];
    this.deleteIndex = 3;
  }

  static list(data: any): Array<User>{
    return data ? data.map(m => {return new User(m)}): []
  }
}