import { Injectable } from '@angular/core';
import axios, { type AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';
import { PersonalInfoRequest, PersonalInfoService } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export default class PersonalInfoAPI {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: environment.baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  getPersonalInfo(email: string) {
    return PersonalInfoService.getPersonalInfo({ email });
  }

  registerNewPersonalInfo(personalInfoRequest: PersonalInfoRequest) {
    return PersonalInfoService.registerNewPersonalInfo({
      body: personalInfoRequest,
    });
  }
}
