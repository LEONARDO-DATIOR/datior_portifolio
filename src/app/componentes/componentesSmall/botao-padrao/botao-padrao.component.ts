import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-padrao',
  imports: [],
  templateUrl: './botao-padrao.component.html',
  styleUrl: './botao-padrao.component.css'
})
export class BotaoPadraoComponent {
  @Input() texto_botao: string = ''; 
}
