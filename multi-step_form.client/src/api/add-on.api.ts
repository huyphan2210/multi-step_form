import { Injectable } from '@angular/core';
import { AddOnService } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export default class AddOnAPI {
  getAddOns() {
    return AddOnService.getAddOns();
  }
}
