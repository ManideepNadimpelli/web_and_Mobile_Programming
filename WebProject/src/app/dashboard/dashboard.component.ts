import { Component, OnInit , ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    loggedUserObj: any;
    sylArray: SyllabusArray[] = [];

    constructor(private router: Router, private formBuilder: FormBuilder , private authenticationService: AuthenticationService) { }


    ngOnInit() {
        this.authenticationService.currentUser().subscribe(res => {
            this.loggedUserObj = res;

            this.authenticationService.getUserSyllabus(this.loggedUserObj._id)
                .subscribe(res1 => {
                    console.log('syllabus response', res1)
                    const result = res1;
                        for ( let m = 0; m < result[0].Syllabus.length; m++) {
                            this.sylArray.push(result[0].Syllabus[m]);
                        };
                    console.log('sem and course array', this.sylArray);
                });
        }, (err) => {
            console.log(err);
        });
    }
}
export class SyllabusArray {
    courses: string;
}
