import { Component } from '@angular/core';
import { CategoriaConhecimentoComponent } from '../../componentes/Certificados_componentes/categoria-conhecimento/categoria-conhecimento.component';
import { DescricaoConhecimentoComponent } from "../../componentes/Categoria_Conhecimento_componentes/descricao-conhecimento/descricao-conhecimento.component";

@Component({
  selector: 'app-page-categoria-conhecimento',
  imports: [CategoriaConhecimentoComponent, DescricaoConhecimentoComponent],
  templateUrl: './page-categoria-conhecimento.component.html',
  styleUrl: './page-categoria-conhecimento.component.css'
})
export class PageCategoriaConhecimentoComponent {

}
