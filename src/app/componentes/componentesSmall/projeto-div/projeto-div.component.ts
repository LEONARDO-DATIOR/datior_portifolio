import {  Component,
  ElementRef,
  Input,
  ViewChild} from '@angular/core';
import { BotaoPadraoComponent } from "../botao-padrao/botao-padrao.component.js";

@Component({
  selector: 'app-projeto-div',
  imports: [BotaoPadraoComponent],
  templateUrl: './projeto-div.component.html',
})
export class ProjetoDivComponent {
  @Input() titulo_projeto: string = '';
  @Input() descricao_projeto: string = '';
  @Input() caminho_imagem: string = '';
  @Input() link_projeto: string = '#';
  
}
