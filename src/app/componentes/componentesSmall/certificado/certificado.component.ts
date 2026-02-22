import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
import { BotaoPadraoComponent } from "../botao-padrao/botao-padrao.component";

@Component({
  selector: 'app-certificado',
  imports: [BotaoPadraoComponent],
  templateUrl: './certificado.component.html',
})
export class CertificadoComponent {
  @Input() link: string = '#';
  @Input() titulo: string = 'SEM NOME';
  @Input() caminho_imagem: string = '../../../assets/imagens/img_certificados/img_certificado.svg';
  @Input() alt_imagem: string = 'Imagem certificado novo';

}
