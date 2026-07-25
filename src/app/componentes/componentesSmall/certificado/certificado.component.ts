import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
})
export class CertificadoComponent {
  @Input() link: string = '#';
  @Input() titulo: string = 'SEM NOME';
  @Input() escola: string = '';
  @Input() dataRealizacao: string = '';
  @Input() categoria: string = 'Não categorizado';

}
