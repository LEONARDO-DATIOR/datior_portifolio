import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-projeto-div',
    templateUrl: './projeto-div.component.html',
})
export class ProjetoDivComponent {
    @Input() titulo_projeto: string = '';
    @Input() descricao_projeto: string = '';
    @Input() caminho_imagem: string = '';
    @Input() link_projeto: string = '#';
    @Input() link_github: string = '#';
    @Input() tecnologias: string[] = [];
}
