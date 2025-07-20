import { Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';
import { BotaoPadraoComponent } from '../componentesSmall/botao-padrao/botao-padrao.component';

@Component({
  selector: 'app-sobre-home',
  imports: [BotaoPadraoComponent],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  textoDigitado = '';
  textoCompleto = `Olá tudo bem? estou realizando esse site para poder compartilhar e demonstrar meu conhecimento em diversas áreas.
  incluindo na de desenvolvimento ou na área de análise de dados, vou compartilhar a evolução da minha carreira e da minha educação.
  todos certificados que eu conseguir vou colocar aqui, vou colocar também meus projetos e minha evolução na carreira. \n No botão aqui
  em baixo você vai para a tela que consegue visualizar melhor as minhas conquistas`;

  @ViewChild('sectionRef', { static: true }) sectionRef!: ElementRef;
  jaDigitou = false;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !this.jaDigitou) {
            this.jaDigitou = true;
            this.digitarTexto();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(this.sectionRef.nativeElement);
    });
  }

  digitarTexto(index = 0) {
    if (index < this.textoCompleto.length) {
      this.ngZone.run(() => {
        this.textoDigitado += this.textoCompleto.charAt(index);
      });
      setTimeout(() => this.digitarTexto(index + 1), 25);
    }
  }
}
