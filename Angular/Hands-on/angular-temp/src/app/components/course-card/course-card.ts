import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course: any;

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Course changed:", changes['course']);
  }

  // Keeps the template clean by moving class logic here.
  get cardClasses() {
    return {
      'card--enrolled': this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

}