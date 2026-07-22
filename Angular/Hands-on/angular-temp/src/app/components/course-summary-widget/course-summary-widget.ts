import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidgetComponent {

  courseCount = 0;

  constructor(private courseService: CourseService) {

    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseCount = courses.length;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}