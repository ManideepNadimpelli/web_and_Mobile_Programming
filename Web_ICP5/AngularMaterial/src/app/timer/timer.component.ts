import { Component, OnInit } from '@angular/core';
import {CountdownEvent} from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public  enteredTime: any;
  public leftTime: any;
  public demand: boolean;
  constructor() { }

  ngOnInit() {
  }

  handleEvent($event: CountdownEvent) {
    console.log('abc');
  }
  startTimer() {
    this.leftTime =  this.enteredTime;
    this.demand = true;
  }
}
