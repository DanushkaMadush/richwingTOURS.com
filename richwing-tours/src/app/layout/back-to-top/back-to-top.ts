import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  imports: [FaIconComponent],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss'
})
export class BackToTopComponent {
  protected readonly icon = faAngleDoubleUp;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
