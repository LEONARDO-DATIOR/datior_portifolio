import { Component } from '@angular/core';
import { CategoriaConhecimentoComponent } from '../../componentes/Certificados_componentes/categoria-conhecimento/categoria-conhecimento.component';
import { TodosCertificadosComponent } from "../../componentes/Certificados_componentes/todos-certificados/todos-certificados.component";

@Component({
  selector: 'app-certificados',
  imports: [CategoriaConhecimentoComponent, TodosCertificadosComponent],
  templateUrl: './certificados.component.html',
})
export class CertificadosComponent {

}
