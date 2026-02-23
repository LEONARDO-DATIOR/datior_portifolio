import { Component, Input } from '@angular/core';
import { BotaoPadraoComponent } from "../botao-padrao/botao-padrao.component";

@Component({
  selector: 'app-certificado',
  imports: [BotaoPadraoComponent],
  templateUrl: './certificado.component.html',
})
export class CertificadoComponent {
  @Input() link: string = '#';
  @Input() titulo: string = 'SEM NOME';
  @Input() escola: string = '';
  @Input() dataRealizacao: string = '';
  @Input() categoria: string = 'Não categorizado';

}
