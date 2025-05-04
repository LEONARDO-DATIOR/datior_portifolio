import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frases-carrosel',
  standalone: true,
  imports: [CommonModule], // Aqui está a correção
  templateUrl: './frases-carrosel.component.html',
})

export class FrasesCarroselComponent {
  // Variável para controlar a visibilidade do carrossel
  @ViewChild('frases_carrosel', { static: false }) cardRef!: ElementRef;
  visivel = false;
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.cardRef && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.visivel = true;
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(this.cardRef.nativeElement);
      }
    }, 0);
  }


  // Frases para o carrossel
  frases = [
    { titulo: "Título 1", frase: "O sucesso é a soma de pequenos esforços repetidos dia após dia, mesmo quando ninguém está olhando.", autor: "Robert Collier" },
    { titulo: "Título 2", frase: "A vida não é medida pelo número de vezes que respiramos, mas pelos momentos que nos tiram o fôlego.", autor: "Maya Angelou" },
    { titulo: "Título 3", frase: "A felicidade não está em outro lugar, mas sim na maneira como escolhemos enxergar e viver cada momento do presente.", autor: " Thich Nhat Hanh" },
    { titulo: "Título 4", frase: "Se você não pode voar, corra. Se não pode correr, ande. Se não pode andar, rasteje. Mas, independentemente de tudo, continue em frente.", autor: "Luther King" }
  ];

  frasesGrupos: { titulo: string; frase: string; autor: string; }[][] = [];

  constructor() {
    // Divide frases em grupos de 2
    for (let i = 0; i < this.frases.length; i += 2) {
      this.frasesGrupos.push(this.frases.slice(i, i + 2));
    }
  }
}
