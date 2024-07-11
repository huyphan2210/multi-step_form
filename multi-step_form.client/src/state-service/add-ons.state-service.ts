import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import AddOnAPI from 'src/api/add-on.api';
import { AddOn } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export class AddOnsStateService {
  private addOnsState$: BehaviorSubject<AddOn[]> = new BehaviorSubject<AddOn[]>(
    []
  );

  constructor(private addOnAPI: AddOnAPI) {}

  getAddOnsState() {
    return this.addOnsState$.asObservable();
  }

  getAddOns() {
    return this.addOnAPI.getAddOns().then((addOns) => {
      this.addOnsState$.next(addOns);
    });
  }
}
