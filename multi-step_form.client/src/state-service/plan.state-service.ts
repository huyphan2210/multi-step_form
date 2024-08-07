import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import PlanAPI from 'src/api/plan.api';
import { Plan } from 'src/swagger/api';
import { PriceType } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export class PlanStateService {
  private plansState$: BehaviorSubject<Plan[]> = new BehaviorSubject<Plan[]>(
    []
  );
  private priceTypeState$: BehaviorSubject<PriceType> =
    new BehaviorSubject<PriceType>(0);

  constructor(private planAPI: PlanAPI) {}

  getPlanState() {
    return this.plansState$.asObservable();
  }

  getPriceTypeState() {
    return this.priceTypeState$.asObservable();
  }

  getPlans() {
    return this.planAPI.getPlans().then((plans) => {
      this.plansState$.next(plans);
    });
  }

  changePriceType() {
    const currentPriceType = this.priceTypeState$.getValue();
    if (currentPriceType === 0) {
      this.priceTypeState$.next(1);
    } else {
      this.priceTypeState$.next(0);
    }
  }
}
