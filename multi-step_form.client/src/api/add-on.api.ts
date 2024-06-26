import { Injectable } from '@angular/core';
import axios, { type AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';
import { AddOnService } from 'src/swagger/api';

@Injectable({
  providedIn: 'root',
})
export default class AddOnAPI {
  axiosInstance: AxiosInstance = axios.create({
    baseURL: environment.baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  getAddOns() {
    return AddOnService.getAddOns();
  }
}
