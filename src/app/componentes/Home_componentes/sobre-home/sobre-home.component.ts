import { Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';
import { BotaoPadraoComponent } from '../../componentesSmall/botao-padrao/botao-padrao.component';

@Component({
  selector: 'app-sobre-home',
  imports: [BotaoPadraoComponent],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  textoDigitado = '';
  textoCompleto = `O objetivo deste portfólio vai além de simplesmente me apresentar para o mercado de trabalho. Na verdade, ele nasce do mesmo motivo pelo qual criamos álbuns de fotos. Não fazemos álbuns apenas para mostrar imagens a outras pessoas, mas para registrar conquistas, guardar momentos felizes e preservar memórias. Eles existem tanto para serem compartilhados quanto para que nós mesmos possamos revisitar nossa história e enxergar a nossa própria evolução. Este site é minha arte. Um espaço onde registro tudo o que conquistei, como evoluí ao longo do tempo e do que sou capaz. É algo que quero mostrar às futuras gerações da minha família — e, acima de tudo, algo que me permita olhar para trás a com orgulho da minha trajetória.`;

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
