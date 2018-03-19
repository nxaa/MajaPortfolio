import { Component, Inject, NgModule, VERSION } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

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

  oldWidth = document.documentElement.clientWidth;
  width = document.documentElement.clientWidth;
  constructor() {
    const $resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
        })
      .debounceTime(200)


      $resizeEvent.subscribe(data => {
        this.width = data;
        // sounds good, doesnt work
        this.updateGalleryLayout();
      });
  }

  updateGalleryLayout() {
    if((this.width > 768 && this.oldWidth < 768) || (this.width < 768 && this.oldWidth > 768)) {
      this.plainGalleryGrid.layout = this.getGalleryLayout();
      this.oldWidth = this.width;
    }
  }

  getGalleryLayout() {
    if(this.width < 768) {
      return new GridLayout({ width: '45%', height: '30%' }, { length: 2, wrap: true });
    }

    return new GridLayout({ width: '20%', height: '5%' }, { length: 4, wrap: true });
  }


    plainGalleryGrid: PlainGalleryConfig = {
      strategy: PlainGalleryStrategy.GRID,
      layout: this.getGalleryLayout()
      
    };

    images: Image[] = [
        new Image(
          0,
          { // modal
            img: 'assets/gallery/frozen1.jpg',
            description: 'Frozen'
          },
          {
            img: 'assets/gallery/thumb/frozen1.jpg'
          }
        ),
        new Image(
          1,
          { // modal
            img: 'assets/gallery/frozen2.jpg',
            description: 'Frozen'
          },
          {
            img: 'assets/gallery/thumb/frozen2.jpg'
          }
        ),
        new Image(
          2,
          { // modal
            img: 'assets/gallery/frozen3.jpg',
            description: 'Frozen'
          },
          {
            img: 'assets/gallery/thumb/frozen3.jpg'
          }
        ),
        new Image(
          3,
          { // modal
            img: 'assets/gallery/Edge.jpg',
            description: 'Edge'
          },
          {
            img: 'assets/gallery/thumb/Edge.jpg'
          }
        ),
        new Image(
          4,
          { // modal
            img: 'assets/gallery/LaDolceVita.jpg',
            description: 'La Dolce Vita'
          },
          {
            img: 'assets/gallery/thumb/LaDolceVita.jpg'
          }
        ),
        new Image(
          5,
          { // modal
            img: 'assets/gallery/LaDolceVita-zdjecia.jpg',
            description: 'La Dolce Vita'
          },
          {
            img: 'assets/gallery/thumb/LaDolceVita-zdjecia.jpg'
          }
        ),
        new Image(
          6,
          { // modal
            img: 'assets/gallery/tropicalgirl1.jpg',
            description: 'Tropical girl'
          },
          {
            img: 'assets/gallery/thumb/tropicalgirl1.jpg'
          }
        ),
        new Image(
          7,
          { // modal
            img: 'assets/gallery/tropicalgirl2.jpg',
            description: 'Tropical girl'
          },
          {
            img: 'assets/gallery/thumb/tropicalgirl2.jpg'
          }
        )
      ];
}