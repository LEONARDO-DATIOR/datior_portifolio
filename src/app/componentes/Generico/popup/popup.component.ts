import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
    selector: 'app-popup',
    standalone: true,
    imports: [NgIf],
    templateUrl: './popup.component.html',
})
export class PopupComponent {
    mostrarPopup = true;

    @ViewChild('popupOverlay') popup!: ElementRef<HTMLDivElement>;

    progresso = 75;

    fechar(): void {
        this.mostrarPopup = false;
        console.log('Modal fechado');
    }

    visualizarMvp(): void {
        console.log('Visualizando MVP...');
    }
}
