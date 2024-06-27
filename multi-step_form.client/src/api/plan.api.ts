import { Injectable } from '@angular/core';
import { PlanService } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export default class PlanAPI {
  getPlans() {
    return PlanService.getPlans();
  }
}
