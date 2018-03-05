import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'contact', component: ContactComponent },
        { path: '**', redirectTo: 'home' }
    ]),
    ModalGalleryModule.forRoot() // <----------------- angular-modal-gallery module import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
