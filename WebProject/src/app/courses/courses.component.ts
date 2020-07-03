import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

const uri = 'http://localhost:3000/file/upload';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: []

})
export class CoursesComponent implements OnInit {
  public selectedSemValue: string;
  public selectedCourseValue: string;

  semesters: Semester[] = [
    {value: 'Fall 2020', viewValue: 'Fall 2020'},
    {value: 'Spring 2021', viewValue: 'Spring 2021'},
    {value: 'Summer 2021', viewValue: 'Summer 2021'}
  ];

  courses: Course[] = [
    {value: 'Bbp', viewValue: 'CS 5051 - Big Data Programming'},
    {value: 'Python', viewValue: 'CS 5052 - Python and Deep Learning'},
    {value: 'Ase', viewValue: 'CS 5053 - Advanced Software Engineering'},
    {value: 'Pb', viewValue: 'CS 5054 - Principles of Big Data'},
    {value: 'Bda', viewValue: 'CS 5055 - Big Data Analytics'},
    {value: 'Web', viewValue: 'CS 5056 - Web/Mobile Programming'}
  ];
  private loggedUserObj: any;
  constructor(private router: Router , private authenticationService: AuthenticationService ) {
  }
  ngOnInit() {
  }
  registerCourse() {
    console.log(this.selectedCourseValue + '-' + this.selectedSemValue);
    this.authenticationService.currentUser().subscribe(res => {
      this.loggedUserObj = res;
      const syllabusObj = {
        userId: this.loggedUserObj._id,
        syllabus: {semester: this.selectedSemValue , course: this.selectedCourseValue}
      }
      this.authenticationService.addSyllabus(syllabusObj).subscribe(data => {
        Swal.fire({
          type: 'success',
          title: 'Enrolled Successfully',
          timer: 2000
        });
        this.router.navigate(['/'])
      }, (err) => {
            console.log(err);
      })
    }, (err) => {
      console.log(err);
    });
  }
}
interface Semester {
  value: string;
  viewValue: string;
}

interface Course {
  value: string;
  viewValue: string;
}
