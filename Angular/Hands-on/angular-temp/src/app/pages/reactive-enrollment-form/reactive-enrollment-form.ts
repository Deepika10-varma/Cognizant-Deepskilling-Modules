import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  // Public so CanDeactivate Guard can access it
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      skills: this.fb.array([
        this.fb.control('')
      ])

    });

  }

  // Custom Validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.toString().startsWith('XX')) {
      return {
        noCourseCode: true
      };
    }

    return null;

  }

  // FormArray Getter
  get skills(): FormArray {

    return this.enrollForm.get('skills') as FormArray;

  }

  // Add Skill
  addSkill(): void {

    this.skills.push(
      this.fb.control('')
    );

  }

  // Remove Skill
  removeSkill(index: number): void {

    this.skills.removeAt(index);

  }

  // Submit Form
  onSubmit(): void {

    if (this.enrollForm.valid) {

      console.log('Form Value:', this.enrollForm.value);

      console.log('Raw Value:', this.enrollForm.getRawValue());

      alert('Enrollment Successful!');

      this.enrollForm.reset();

    }

  }

}