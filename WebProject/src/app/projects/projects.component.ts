import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  placeData = null;
  public item: any;
  constructor(private service: AuthenticationService) { }
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
