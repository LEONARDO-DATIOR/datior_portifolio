import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
import { BotaoPadraoComponent } from "../botao-padrao/botao-padrao.component";

@Component({
  selector: 'app-certificado',
  imports: [BotaoPadraoComponent],
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
    if (!this.dialogElement.open) {
      this.dialogElement.showModal();
    }
  }

  fecharDialog(){
    this.dialogElement.close();
  }
}
