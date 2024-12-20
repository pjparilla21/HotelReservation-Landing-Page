import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <nav class="nav">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#reservation" class="nav-link">Reservation</a>
          <a href="#gallery" class="nav-link">Gallery</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="#reviews" class="nav-link">Reviews</a>  
        </nav>
        <p class="copyright">© 2024 PJ Parilla. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [
    `
      /* Footer Styles */
      .footer {
        background-color: #2B1103; /* Dark brown background */
        color: #fff;
        text-align: center;
        padding: 1.5rem 0;
        margin-top: 2rem;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .nav {
        display: flex;
        gap: 1.5rem;
      }

      .nav-link {
        font-size: 0.875rem; /* Equivalent to text-sm */
        font-weight: 500; /* Equivalent to font-medium */
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .nav-link:hover {
        color: #bbb; /* Equivalent to hover:text-gray-400 */
      }

      .copyright {
        margin-top: 1rem;
        font-size: 0.75rem; /* Equivalent to text-xs */
        color: rgba(255, 255, 255, 0.7); /* Equivalent to text-white-500 */
      }
    `,
  ],
})
export class FooterComponent {}
