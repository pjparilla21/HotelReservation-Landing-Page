import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';  // Import Swiper bundle, which includes the required modules


@Component({

  selector: 'app-home',

    template: `
<section class="home" id="home">
    <div class="swiper home-slider">
        <div class="swiper-wrapper">
            <div class="box swiper-slide luxurious-rooms">
                <div class="flex">
                    <h3>luxurious rooms</h3>
                    <a href="#availability" class="btn">check availability</a>
                </div>
            </div>
            <div class="box swiper-slide foods-drinks">
                <div class="flex">
                    <h3>foods and drinks</h3>
                    <a href="#reservation" class="btn">make a reservation</a>
                </div>
            </div>
            <div class="box swiper-slide luxurious-halls">
                <div class="flex">
                    <h3>luxurious halls</h3>
                    <a href="#contact" class="btn">contact us</a>
                </div>
            </div>
        </div>
        <!-- Navigation Buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</section>




`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    const swiper = new Swiper('.home-slider', {
      loop: true,
      effect: 'coverflow',
      spaceBetween: 30,
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
