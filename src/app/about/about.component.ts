
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<!-- about section starts  -->

<section class="about" id="about">
    <div class="row">
        <div class="timeline">
            <div class="timeline-line"></div>
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>Best Staff</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="../images/about-img-1.jpg" alt="">
        </div>
        <div class="content">
            <h3>Best Staff</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
            <a href="#reservation" class="btn">Make a Reservation</a>
        </div>
    </div>

    <div class="row revers">
        <div class="timeline">
            <div class="timeline-line"></div>
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>Best Foods</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="../images/about-img-2.jpg" alt="">
        </div>
        <div class="content">
            <h3>Best Foods</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
            <a href="#contact" class="btn">Contact Us</a>
        </div>
    </div>

    <div class="row">
        <div class="timeline">
            <div class="timeline-line"></div>
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>Swimming Pool</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="../images/about-img-3.jpg" alt="">
        </div>
        <div class="content">
            <h3>Swimming Pool</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum maxime eius aliquid temporibus unde?</p>
            <a href="#availability" class="btn">Check Availability</a>
        </div>
    </div>
</section>


 
 <!-- about section ends -->


`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
   // Scroll event to show timeline items as they appear
window.addEventListener('scroll', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      // If item is in the viewport, show it
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          item.classList.add('show');
      } else {
          // Hide the item if it is not in the viewport
          item.classList.remove('show');
      }
  });
});

// Click event to toggle visibility of each timeline item
const timelineMarkers = document.querySelectorAll('.timeline-marker');
timelineMarkers.forEach(marker => {
  marker.addEventListener('click', (event) => {
      // Toggle the corresponding timeline item visibility when the marker is clicked
      const target = event.target as Element;
      const timelineItem = target ? target.closest('.timeline-item') : null;
      if (timelineItem) {
          timelineItem.classList.toggle('hidden');
      }
  });
});

// Scroll event to detect scroll direction (down or up) and hide/show items accordingly
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  timelineItems.forEach(item => {
      if (scrollTop > lastScrollTop) {
          // Scroll Down: Show items
          item.classList.add('show');
      } else {
          // Scroll Up: Hide items
          item.classList.remove('show');
      }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
});

  }
}

  

