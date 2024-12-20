import { Component } from '@angular/core';

@Component({
  selector: 'app-availability',
  imports: [],
  template: `<!-- availability section starts  -->

  <section class="availability" id="availability">
  
     <form action="" method="post">
        <div class="flex">
           <div class="box">
              <p>check in <span>*</span></p>
              <input type="date" name="check_in" class="input" required>
           </div>
           <div class="box">
              <p>check out <span>*</span></p>
              <input type="date" name="check_out" class="input" required>
           </div>
           <div class="box">
              <p>adults <span>*</span></p>
              <select name="adults" class="input" required>
                 <option value="1">1 adult</option>
                 <option value="2">2 adults</option>
                 <option value="3">3 adults</option>
                 <option value="4">4 adults</option>
                 <option value="5">5 adults</option>
                 <option value="6">6 adults</option>
              </select>
           </div>
           <div class="box">
              <p>childs <span>*</span></p>
              <select name="childs" class="input" required>
                 <option value="-">0 child</option>
                 <option value="1">1 child</option>
                 <option value="2">2 childs</option>
                 <option value="3">3 childs</option>
                 <option value="4">4 childs</option>
                 <option value="5">5 childs</option>
                 <option value="6">6 childs</option>
              </select>
           </div>
           <div class="box">
              <p>rooms <span>*</span></p>
              <select name="rooms" class="input" required>
                 <option value="1">1 room</option>
                 <option value="2">2 rooms</option>
                 <option value="3">3 rooms</option>
                 <option value="4">4 rooms</option>
                 <option value="5">5 rooms</option>
                 <option value="6">6 rooms</option>
              </select>
           </div>
        </div>
        <input type="submit" value="check availability" name="check" class="btn">
     </form>
  
  </section>
  
  <!-- availability section ends -->`,
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {

}
