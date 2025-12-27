import { Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';
import { BotaoPadraoComponent } from '../../componentesSmall/botao-padrao/botao-padrao.component';

@Component({
  selector: 'app-sobre-home',
  imports: [BotaoPadraoComponent],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  textoDigitado = '';
  textoCompleto = `Com 22 anos, já vivi diversas experiências na área de TI que me ajudaram a entender onde realmente está minha paixão: o desenvolvimento. Descobri que o que mais me motiva é criar soluções que simplifiquem a vida das pessoas — não apenas de quem utiliza diretamente, mas também de todos ao seu redor. Acredito que a tecnologia existe para isso: facilitar, conectar e transformar. Seja por meio de automações, sistemas organizacionais ou ferramentas que proporcionem momentos de lazer, meu objetivo é sempre o mesmo — gerar impacto positivo e abrir caminhos para que outros também possam inovar.`;

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
