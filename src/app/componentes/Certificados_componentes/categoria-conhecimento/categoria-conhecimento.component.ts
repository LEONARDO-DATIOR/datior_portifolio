import { Component, Input } from '@angular/core';
import { CertificadoCategoriaComponent } from "../../componentesSmall/certificado-categoria/certificado-categoria.component";
import { NgFor, NgIf } from '@angular/common';
import { DescricaoConhecimentoComponent } from "../../Categoria_Conhecimento_componentes/descricao-conhecimento/descricao-conhecimento.component";

@Component({
  selector: 'app-categoria-conhecimento',
  imports: [CertificadoCategoriaComponent, NgFor, NgIf, DescricaoConhecimentoComponent],
  templateUrl: './categoria-conhecimento.component.html',
})
export class CategoriaConhecimentoComponent {
  @Input() categorias: string[] = ['front-end', 'Gerenciamento de projetos', 'Back-end', 'Design', 'Análise de dados', 'Infraestrutura'];
}
