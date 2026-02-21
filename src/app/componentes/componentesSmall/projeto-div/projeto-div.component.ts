import {  Component,
  ElementRef,
  Input,
  ViewChild} from '@angular/core';
import { BotaoPadraoComponent } from "../botao-padrao/botao-padrao.component.js";
import { AppRoutingModule } from "../../../app.routes";

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
  @Input() link_github: string = '#';
  
}
