import { Component } from '@angular/core';
import { CategoriaConhecimentoComponent } from '../../componentes/Certificados_componentes/categoria-conhecimento/categoria-conhecimento.component';
import { PrincipaisCertificadosComponent } from '../../componentes/Certificados_componentes/principais-certificados/principais-certificados.component';
import { TodosCertificadosComponent } from "../../componentes/Certificados_componentes/todos-certificados/todos-certificados.component";

@Component({
  selector: 'app-certificados',
  imports: [CategoriaConhecimentoComponent, PrincipaisCertificadosComponent, TodosCertificadosComponent],
  templateUrl: './certificados.component.html',
})
export class CertificadosComponent {

}
