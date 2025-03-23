import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frases-carrosel',
  standalone: true,
  imports: [CommonModule], // Aqui está a correção
  templateUrl: './frases-carrosel.component.html',
  styleUrls: ['./frases-carrosel.component.css']
})

export class FrasesCarroselComponent {
  frases = [
    { titulo: "Título 1", frase: "frase 1lsd asdsaodasoidsjad osajdoi sadoasmd asod aoidaoid masoid asmoid kkkkkkkkkkkkkkkkkkk", autor: "autor 1" },
    { titulo: "Título 2", frase: "frase 2", autor: "autor 2" },
    { titulo: "Título 3", frase: "frase 3", autor: "autor 3" },
    { titulo: "Título 4", frase: "frase 4", autor: "autor 4" }
  ];

  frasesGrupos: { titulo: string; frase: string; autor: string; }[][] = [];

  constructor() {
    // Divide frases em grupos de 2
    for (let i = 0; i < this.frases.length; i += 2) {
      this.frasesGrupos.push(this.frases.slice(i, i + 2));
    }
  }
}