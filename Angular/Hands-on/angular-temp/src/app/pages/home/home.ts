import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data';
import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseSummaryWidgetComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  searchTerm = '';

  sharedMessage = '';

  message = '';

  courseCount = 0;

  constructor(private courseService: CourseService,
      private sharedDataService: SharedDataService

  ) {}

  ngOnInit(): void {

  this.courseService.getCourses().subscribe({
    next: (courses) => {
      this.courseCount = courses.length;
    },
    error: (err) => {
      console.error(err);
    }
  });
    this.sharedMessage = this.sharedDataService.getMessage();

  }

  onEnrollClick() {

    this.message = 'Enrollment opened!';

  }
  updateMessage() {

    this.sharedDataService.setMessage('Message updated from Home Component');

    this.sharedMessage = this.sharedDataService.getMessage();

  }

}