import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Course } from '../../models/course.model';

import * as CourseActions from '../../store/course/course.actions';

import {

  selectAllCourses,

  selectCoursesError,

  selectCoursesLoading

} from '../../store/course/course.selectors';

@Component({

  selector: 'app-course-list',

  standalone: true,

  imports: [

    CommonModule,

    RouterModule

  ],

  templateUrl: './course-list.html',

  styleUrl: './course-list.css'

})

export class CourseListComponent implements OnInit {

  courses$!: Observable<Course[]>;

  loading$!: Observable<boolean>;

  error$!: Observable<string | null>;

  selectedSemester = '';

  constructor(

    private store: Store,

    private router: Router,

    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.selectedSemester = params['semester'] || '';

    });

    this.courses$ = this.store.select(selectAllCourses);

    this.loading$ = this.store.select(selectCoursesLoading);

    this.error$ = this.store.select(selectCoursesError);

    this.store.dispatch(

      CourseActions.loadCourses()

    );

  }

  viewCourse(id: number): void {

    this.router.navigate(

      ['/courses', id],

      {

        queryParams: {

          semester: this.selectedSemester

        }

      }

    );

  }

}