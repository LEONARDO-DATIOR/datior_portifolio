import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-padrao',
  imports: [CommonModule],
  templateUrl: './botao-padrao.component.html',
})
export class BotaoPadraoComponent {
  @Input() texto_botao: string = ''; 
  @Input() submit_botao: boolean = false;
  @Input() disabled_botao: boolean = false;
}
