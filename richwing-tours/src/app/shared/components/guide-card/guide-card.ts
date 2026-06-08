import { Component, Input } from '@angular/core';

import { TeamMember } from '../../../core/models/team-member.model';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.html',
  styleUrl: './guide-card.scss'
})
export class GuideCardComponent {
  @Input({ required: true }) member!: TeamMember;
}
