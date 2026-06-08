import { Component, Input } from '@angular/core';

import { GalleryImage } from '../../../core/models/gallery.model';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.scss'
})
export class GalleryGridComponent {
  @Input() images: GalleryImage[] = [];
}
