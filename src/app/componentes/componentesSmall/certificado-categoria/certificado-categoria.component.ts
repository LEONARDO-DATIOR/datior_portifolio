import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certificado-categoria',
  imports: [CommonModule],
  templateUrl: './certificado-categoria.component.html',
})
export class CertificadoCategoriaComponent {
    @Input() link: string = '#'; 
    @Input() caminho_imagem: string = '../../../assets/imagens/icons/Icone_design.svg'; 
    @Input() alt_imagem: string = 'Imagem Categoria'; 
    @Input() titulo: string = 'Categoria Conhecimento'; 
    @Input() tipo: string = 'categoria';
}
