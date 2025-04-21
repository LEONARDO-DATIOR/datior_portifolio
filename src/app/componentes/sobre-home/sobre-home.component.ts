import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BotaoPadraoComponent } from "../componentesSmall/botao-padrao/botao-padrao.component";

@Component({
  selector: 'app-sobre-home',
  imports: [BotaoPadraoComponent],
  templateUrl: './sobre-home.component.html',
})

export class SobreHomeComponent  {
  @ViewChild('textoSobreHome', { static: true }) cardRef!: ElementRef;
  visivel = false;

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visivel = true;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(this.cardRef.nativeElement);
    } else {
      console.warn("IntersectionObserver não suportado");
    }
  }

}
