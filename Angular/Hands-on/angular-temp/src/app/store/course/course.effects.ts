import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CourseService } from '../../services/course';

import * as CourseActions from './course.actions';

import {
  catchError,
  map,
  mergeMap,
  of
} from 'rxjs';

@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() =>

  this.actions$.pipe(

    ofType(CourseActions.loadCourses),

    mergeMap(() => {

      console.log('Effect Triggered');

      return this.courseService.getCourses().pipe(

        map(courses => {

          console.log('Courses from API', courses);

          return CourseActions.loadCoursesSuccess({ courses });

        }),

        catchError(error => {

          console.log('Effect Error', error);

          return of(
            CourseActions.loadCoursesFailure({
              error: error.message
            })
          );

        })

      );

    })

  )

);

  constructor(

    private actions$: Actions,

    private courseService: CourseService

  ) {}

}