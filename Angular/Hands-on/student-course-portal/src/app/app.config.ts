import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import {
  provideStore
} from '@ngrx/store';

import {
  provideEffects
} from '@ngrx/effects';

import {
  provideStoreDevtools
} from '@ngrx/store-devtools';
import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptors([authInterceptor, errorHandlerInterceptor, loadingInterceptor])),
    provideRouter(routes),
    provideStore({
      course: courseReducer,
      enrollment: enrollmentReducer
    }),

    provideEffects(
      CourseEffects
    ),

    provideStoreDevtools({
      maxAge: 25
    }),
    // provideClientHydration(withEventReplay())
  ]
};