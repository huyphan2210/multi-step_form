import { Injectable } from '@angular/core';
import { PersonalInfoRequest, PersonalInfoService } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export default class PersonalInfoAPI {
  getPersonalInfo(email: string) {
    return PersonalInfoService.getPersonalInfo({ email });
  }

  registerNewPersonalInfo(personalInfoRequest: PersonalInfoRequest) {
    return PersonalInfoService.registerNewPersonalInfo({
      body: personalInfoRequest,
    });
  }
}
