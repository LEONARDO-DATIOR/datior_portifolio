import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';

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

  @ViewChild('dialog') private dialog?: ElementRef<HTMLDialogElement>

  private get dialogElement() {
    return this.dialog?.nativeElement as HTMLDialogElement;
  }

  abrirDialog(){
    console.log('dentro da função')
    if (!this.dialogElement.open) {
      console.log('dentro da função - abrindo modal')
      this.dialogElement.showModal();
    }
  }

  fecharDialog(){
    this.dialogElement.close();
  }
}
