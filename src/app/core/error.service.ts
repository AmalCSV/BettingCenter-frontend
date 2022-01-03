import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
    public isError: Boolean = false;
    constructor() { }
    viewError(data): any {
        if (this.isError) {
            return false;
        }
        console.log("API Error", data);
        this.isError = true;
        // data can be use to show the alert data with content
    }
}
