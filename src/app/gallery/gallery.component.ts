import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-gallery',
  template: `
  
<!-- gallery section starts  -->

<section class="gallery" id="gallery">
   <div class="swiper gallery-slider">
      <div class="swiper-wrapper">
         <div class="swiper-slide slide-1"></div>
         <div class="swiper-slide slide-2"></div>
         <div class="swiper-slide slide-3"></div>
         <div class="swiper-slide slide-4"></div>
         <div class="swiper-slide slide-5"></div>
         <div class="swiper-slide slide-6"></div>
      </div>
      <div class="swiper-pagination"></div>
   </div>
</section>


<!-- gallery section ends -->
  `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  ngOnInit(): void {
    var mySwiper = new Swiper(".gallery-slider", {
      effect: "coverflow",
      slidesPerView: "auto",
      centeredSlides: true,
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

