import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { runInThisContext } from 'node:vm';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.component.html',
})
export class ApresentacaoComponent {
  // EXIBIR VIDEO
  @ViewChild('video', { static: false }) videoElementRef!: ElementRef;
  @ViewChild('imagemBotaoPlay', { static: false })
  botaoPlayElementRef!: ElementRef;

  exibirVideo() {
    this.botaoPlayElementRef.nativeElement.style.display = 'none';
    this.videoElementRef.nativeElement.style.display = 'block';
  }

  imagemPlayApagado: string =
    '../../../../assets/imagens/icons/botao_play_apagado.svg';
  imagemPlayAcesso: string =
    '../../../../assets/imagens/icons/botao_play_acesso.svg';
  srcImagemHover: string = this.imagemPlayApagado;

  onMouseEnter() {
    this.srcImagemHover = this.imagemPlayAcesso;
  }

  onMouseLeave() {
    this.srcImagemHover = this.imagemPlayApagado;
  }
}
