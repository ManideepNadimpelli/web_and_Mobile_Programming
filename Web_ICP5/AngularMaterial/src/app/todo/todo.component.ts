import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  courseByWeekArray: CourseByWeek[] = [];
  constructor() { }

  ngOnInit() {
  }

  removeCourse(index) {
    if (this.courseByWeekArray[index] != null) {
      this.courseByWeekArray.splice(index, 1);
    }
    console.log(this.courseByWeekArray);
  }
  addNewCourse() {
    const obj = new CourseByWeek();
    obj.week  = this.courseByWeekArray.length ? this.courseByWeekArray.length + 1 : 1;
    this.courseByWeekArray.push(obj);
  }
}
export class CourseByWeek {
  week: number;
  course: string;
  date: Date;
}
