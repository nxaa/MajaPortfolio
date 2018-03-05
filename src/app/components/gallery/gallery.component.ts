import { Component, Inject, NgModule, VERSION } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {
    AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
    DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
  } from 'angular-modal-gallery';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

    plainGalleryGrid: PlainGalleryConfig = {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '20%', height: '5%' }, { length: 4, wrap: true })
      
    };

    images: Image[] = [
        new Image(
          0,
          { // modal
            img: 'assets/gallery/frozen1.jpg',
            description: 'Frozen'
          }
        ),
        new Image(
          1,
          { // modal
            img: 'assets/gallery/frozen2.jpg',
            description: 'Frozen'
          }
        ),
        new Image(
          2,
          { // modal
            img: 'assets/gallery/frozen3.jpg',
            description: 'Frozen'
          }
        ),
        new Image(
          3,
          { // modal
            img: 'assets/gallery/Edge.jpg',
            description: 'Edge'
          }
        ),
        new Image(
          4,
          { // modal
            img: 'assets/gallery/LaDolceVita.jpg',
            description: 'La Dolce Vita'
          }
        ),
        new Image(
          5,
          { // modal
            img: 'assets/gallery/LaDolceVita-zdjecia.jpg',
            description: 'La Dolce Vita'
          }
        ),
        new Image(
          6,
          { // modal
            img: 'assets/gallery/tropicalgirl1.jpg',
            description: 'Tropical girl'
          }
        ),
        new Image(
          7,
          { // modal
            img: 'assets/gallery/tropicalgirl2.jpg',
            description: 'Tropical girl'
          }
        )
      ];
}