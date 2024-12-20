import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    AvailabilityComponent,
    ContactComponent,
    GalleryComponent,
    FooterComponent,
    ReservationComponent,
    ReviewsComponent,
    ServicesComponent,
  ],
  template: `
    <section class="header">
      <div class="flex">
        <a href="#home" class="logo">Hotels And Resorts</a>
        <a href="#availability" class="btn">check availability</a>
        <div id="menu-btn" class="fas fa-bars" (click)="toggleNavbar()"></div>
      </div>

      <nav class="navbar" [class.active]="isNavbarActive">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#reservation">reservation</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">contact</a>
        <a href="#reviews">reviews</a>
      </nav>
    </section>
   
    <app-home></app-home>
    <app-availability></app-availability>
    <app-about></app-about>
    <app-services></app-services>
    <app-reservation></app-reservation>
    <app-gallery></app-gallery>
    <app-contact></app-contact>
    <app-reviews></app-reviews>
    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hotelreservation';
  isNavbarActive = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarActive = false;
  }
}
