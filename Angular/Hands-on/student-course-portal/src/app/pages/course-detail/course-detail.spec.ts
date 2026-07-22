import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CourseDetailComponent } from './course-detail';

describe('CourseDetailComponent', () => {

  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseDetailComponent],

      providers: [

        provideRouter([]),

        provideHttpClient(),

        provideHttpClientTesting(),

        {
          provide: ActivatedRoute,
          useValue: {

            snapshot: {
              paramMap: {
                get: () => '1'
              }
            },

            paramMap: of({
              get: () => '1'
            })

          }
        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});