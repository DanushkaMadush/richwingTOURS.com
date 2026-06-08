import { Component, Input } from '@angular/core';

import { TeamMember } from '../../../core/models/team-member.model';
import { GuideCardComponent } from '../guide-card/guide-card';

@Component({
  selector: 'app-guide-grid',
  imports: [GuideCardComponent],
  templateUrl: './guide-grid.html',
  styleUrl: './guide-grid.scss'
})
export class GuideGridComponent {
  @Input() members: TeamMember[] = [];
}
