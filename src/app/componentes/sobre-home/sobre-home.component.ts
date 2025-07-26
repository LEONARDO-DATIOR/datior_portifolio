import { Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';
import { BotaoPadraoComponent } from '../componentesSmall/botao-padrao/botao-padrao.component';

@Component({
  selector: 'app-sobre-home',
  imports: [BotaoPadraoComponent],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  textoDigitado = '';
  textoCompleto = `Olá! Seja bem-vindo ao meu portfólio.
  Ele ainda está em construção, então é possível encontrar alguns ajustes pendentes ou conteúdos faltando — especialmente na parte de certificações e projetos.
  Mesmo assim, você já pode explorar uma prévia do meu conhecimento em front-end.
  A criação deste portfólio está documentada em vídeo, como parte da validação prática do meu aprendizado e desenvolvimento.`;

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
