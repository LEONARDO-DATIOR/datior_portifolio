import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    estaAparecendo = false;
    scrollNoTopo = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > this.scrollNoTopo && scrollTop > 170) {
            this.estaAparecendo = true; // rolando pra baixo
        } else {
            this.estaAparecendo = false; // rolando pra cima
        }

        this.scrollNoTopo = scrollTop <= 0 ? 0 : scrollTop;
    }
}
