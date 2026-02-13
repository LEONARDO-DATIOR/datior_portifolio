import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao-padrao',
  imports: [CommonModule],
  templateUrl: './botao-padrao.component.html',
})
export class BotaoPadraoComponent {
  @Input() texto_botao: string = 'Clique aqui'; 
  @Input() submit_botao: boolean = false;
  @Input() tipo_botao: string = 'botao_preto'; // Pode ser 'button', 'submit' ou 'reset'
  @Input() disabled_botao: boolean = false;
 
  @Input() ativo: boolean = false; 

  @HostBinding('class.ativo') get estaAtivo() {
    console.log('Valor de ativo:', this.ativo);
    return this.ativo;
  }
}
