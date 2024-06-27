import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import AddOnAPI from 'src/api/add-on.api';
import { environment } from 'src/environments/environment';
import { serviceOptions } from 'src/swagger/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private addOnAPI: AddOnAPI) {
    serviceOptions.axios = axios.create({
      baseURL: environment.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  ngOnInit() {
    this.addOnAPI.getAddOns();
  }
}
