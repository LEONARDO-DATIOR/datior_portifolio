import { Component, ElementRef, ViewChild } from '@angular/core';
import { BotaoPadraoComponent } from "../../componentesSmall/botao-padrao/botao-padrao.component";
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-texto-sobre',
  imports: [BotaoPadraoComponent, CommonModule],
  templateUrl: './texto-sobre.component.html'
})
export class TextoSobreComponent {

  botaoAtivo: number | null = null;


  ativarBotao(valor: number) {
    if (this.botaoAtivo === valor) {
      this.botaoAtivo = null;
    } else {
      this.botaoAtivo = valor;
    }
  }


}
