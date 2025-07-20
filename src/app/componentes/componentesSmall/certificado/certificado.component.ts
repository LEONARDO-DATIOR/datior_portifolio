import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificado',
  imports: [],
  templateUrl: './certificado.component.html',
})
export class CertificadoComponent {
  @Input() link: string = '#';
  @Input() titulo: string = 'Certificado novo!!';
  @Input() caminho_imagem: string = '../../../assets/imagens/img_certificados/img_certificado.svg';
  @Input() alt_imagem: string = 'Imagem certificado novo';
}
