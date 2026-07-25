import { Component, Input } from '@angular/core';
import { CertificadoCategoriaComponent } from "../../componentesSmall/certificado-categoria/certificado-categoria.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-categoria-conhecimento',
  imports: [CertificadoCategoriaComponent, NgFor, NgIf],
  templateUrl: './categoria-conhecimento.component.html',
})
export class CategoriaConhecimentoComponent {
  @Input() categorias: string[] = ['Front-end', 'Gerenciamento de projetos', 'Back-end', 'Design', 'Análise de dados', 'Infraestrutura'];
}
