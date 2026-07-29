import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    // lógica para sumir ou aparecer com o menu de acordo com o click
    @ViewChild('menu') menu!: ElementRef;
    @ViewChild('burger_menu') burger_menu!: ElementRef;
    menuAberto: boolean = false;

    toggleMenu(event: MouseEvent): void {
        event.stopPropagation();
        this.menuAberto = !this.menuAberto;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (
            this.menuAberto &&
            this.menu &&
            !this.menu.nativeElement.contains(event.target) &&
            !this.burger_menu.nativeElement.contains(event.target)
        ) {
            this.menuAberto = false;
        }
    }

    // Animação de sumir e aparece o header com o movimento do mouse
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
