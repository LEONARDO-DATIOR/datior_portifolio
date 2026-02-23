import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descricao-conhecimento',
  imports: [],
  templateUrl: './descricao-conhecimento.component.html',
  styleUrl: './descricao-conhecimento.component.css'
})
export class DescricaoConhecimentoComponent {
  @Input() descricaoConhecimento: string = 'Teste de descricao de conhecimento para preencher o campo de descrição do conhecimento. Este texto é apenas um exemplo para ilustrar como a descrição do conhecimento será exibida na página de categoria de conhecimento.';
}
