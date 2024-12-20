import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
  <!-- contact section starts  -->

  <section class="contact" id="contact">

    <div class="row">

      <form action="" method="post">
        <h3>send us message</h3>
        <input type="text" name="name" required maxlength="50" placeholder="enter your name" class="box">
        <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box">
        <input type="number" name="number" required maxlength="10" min="0" max="9999999999" placeholder="enter your number" class="box">
        <textarea name="msg" class="box" required maxlength="1000" placeholder="enter your message" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" name="send" class="btn">
      </form>

      <div class="faq">
        <h3 class="title">frequently asked questions</h3>
        <div class="box active">
          <h3>how to cancel?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt aspernatur excepturi eos! Quibusdam, sapiente.</p>
        </div>
        <div class="box">
          <h3>is there any vacancy?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
        </div>
        <div class="box">
          <h3>what are payment methods?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
        </div>
        <div class="box">
          <h3>how to claim coupons codes?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
        </div>
        <div class="box">
          <h3>what are the age requirements?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
        </div>
      </div>

    </div>

  </section>

  <!-- contact section ends -->
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngOnInit(): void {
    // Add click event listeners to FAQ items
    document.querySelectorAll<HTMLElement>('.contact .row .faq .box h3').forEach((faqBox: HTMLElement) => {
      faqBox.onclick = () => {
        // Toggle the 'active' class on the parent .box element
        const parentBox = faqBox.parentElement as HTMLElement;
        parentBox.classList.toggle('active');
      };
    });
  }
}
