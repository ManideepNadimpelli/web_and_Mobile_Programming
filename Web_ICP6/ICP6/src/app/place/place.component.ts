import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(private service: ApiService) { }
  placeData = null;
  public item: any;
  ngOnInit() {
  }
  getPlaceDetails() {
    this.service.placeFinder(this.item).subscribe(data => {
      // tslint:disable-next-line:no-debugger
      // debugger;
      this.placeData = data;
    });
  }
}
