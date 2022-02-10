import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showErrorAlert(msg) {
    Swal.fire('Error', msg, 'error')
  }
}
