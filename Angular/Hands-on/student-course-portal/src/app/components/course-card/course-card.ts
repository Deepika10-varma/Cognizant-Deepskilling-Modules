import { Component, Input } from '@angular/core';
import { CommonModule, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    CreditLabelPipe,
    HighlightDirective
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  @Input() course!: Course;

  isExpanded = false;

  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  get cardClasses() {
    return {
      passed: this.course.gradeStatus === 'passed',
      failed: this.course.gradeStatus === 'failed',
      pending: this.course.gradeStatus === 'pending'
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnrollment(): void {

  this.enrolledIds$
    .pipe(take(1))
    .subscribe(ids => {

      if (ids.includes(this.course.id)) {

        this.store.dispatch(
          unenrollFromCourse({
            courseId: this.course.id
          })
        );

      } else {

        this.store.dispatch(
          enrollInCourse({
            courseId: this.course.id
          })
        );

      }

    });

}
}