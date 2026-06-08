import { Component, Input } from '@angular/core';

import { TeamMember } from '../../../core/models/team-member.model';
import { SocialLinksComponent } from '../social-links/social-links';

@Component({
  selector: 'app-guide-card',
  imports: [SocialLinksComponent],
  templateUrl: './guide-card.html',
  styleUrl: './guide-card.scss'
})
export class GuideCardComponent {
  @Input({ required: true }) member!: TeamMember;
}
