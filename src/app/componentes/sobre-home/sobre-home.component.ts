import { Component, ElementRef, OnInit, ViewChild, NgZone} from '@angular/core';

@Component({
  selector: 'app-sobre-home',
  imports: [],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  textoDigitado = '';
  textoCompleto = `Jovem talento de 22 anos, formado em Análise e Desenvolvimento de Sistemas,
com mais de três anos de experiência profissional na área de tecnologia.
Atualmente ocupa o cargo de analista de infraestrutura na Localiza, pela DXC.`;

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
