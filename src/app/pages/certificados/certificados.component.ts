import { Component } from '@angular/core';
import { CategoriaConhecimentoComponent } from '../../componentes/categoria-conhecimento/categoria-conhecimento.component';
import { PrincipaisCertificadosComponent } from '../../componentes/principais-certificados/principais-certificados.component';

@Component({
  selector: 'app-certificados',
  imports: [CategoriaConhecimentoComponent, PrincipaisCertificadosComponent],
  templateUrl: './certificados.component.html',
})
export class CertificadosComponent {

}
