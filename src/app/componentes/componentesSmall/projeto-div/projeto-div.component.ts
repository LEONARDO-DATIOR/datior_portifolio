import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto-div',
  imports: [],
  templateUrl: './projeto-div.component.html',
})
export class ProjetoDivComponent {
  @Input() titulo_projeto: string = '';
  @Input() descricao_projeto: string = '';
  @Input() caminho_imagem: string = '';
  @Input() link_projeto: string = '#';
}
