import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-certificado',
    templateUrl: './certificado.component.html',
    imports: [NgClass],
})
export class CertificadoComponent {
    @Input() link: string = '#';
    @Input() titulo: string = 'SEM NOME';
    @Input() escola: string = '';
    @Input() dataRealizacao: string = '';
    @Input() categoria: string = 'Não categorizado';

    // Mudar classe do button de acordo com a categoria vinda do CSV:
    getClasseCategoria(categoria: string): string {
        switch (categoria) {
            case 'FRONT-END':
                return 'front-end';
            case 'BACK-END':
                return 'back-end';
            case 'PROGRAMAÇÃO / ALGORITMO':
                return 'back-end';
            case 'BANCO DE DADOS':
                return 'back-end';
            case 'UI/UX':
                return 'design';
            case 'ANALISE DE DADOS':
                return 'analise-de-dados';
            case 'IA':
                return 'analise-de-dados';
            case 'REDES/CLOUD':
                return 'infraestrutura';
            case 'METODOLOGIAS AGEIS':
                return 'gestao';
            default:
                return 'sem-categoria';
        }
    }
}
