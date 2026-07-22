import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { CourseListComponent } from './course-list';

describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseListComponent],

      providers: [

        provideRouter([]),

        {
          provide: ActivatedRoute,
          useValue: {

            queryParams: of({}),

            snapshot: {
              paramMap: {
                get: () => '1'
              }
            },

            paramMap: of({
              get: () => '1'
            })

          }
        },

        provideMockStore({
          initialState: {
            course: {
              courses: [],
              loading: false,
              error: null
            },
            enrollment: {
              enrolledCourseIds: []
            }
          }
        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});