import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-projeto',
    templateUrl: './projeto.component.html',
    styleUrl: './projeto.component.scss',
})
export class ProjetoComponent {
    @Input() titulo_projeto: string = '';
    @Input() descricao_projeto: string = '';
    @Input() caminho_imagem: string = '';
    @Input() link_projeto: string = '#';
    @Input() link_github: string = '#';
    @Input() tecnologias: string[] = [];
}
