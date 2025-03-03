import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
        RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  closeMenu() {
    const checkBox = document.getElementById('check') as HTMLInputElement;
    if (checkBox) {
      checkBox.checked = false;
    }
  }
}
