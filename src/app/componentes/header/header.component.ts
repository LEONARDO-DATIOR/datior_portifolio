import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > 170) {
      this.isHidden = true; // rolando pra baixo
    } else {
      this.isHidden = false; // rolando pra cima
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
