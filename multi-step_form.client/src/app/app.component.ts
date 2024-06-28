import { Component, OnInit } from '@angular/core';
import AddOnAPI from 'src/api/add-on.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private addOnAPI: AddOnAPI) {}

  ngOnInit() {
    this.addOnAPI.getAddOns();
  }
}
