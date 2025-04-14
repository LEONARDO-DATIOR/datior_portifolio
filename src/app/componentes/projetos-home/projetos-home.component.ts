import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoDivComponent } from '../componentesSmall/projeto-div/projeto-div.component';

@Component({
  selector: 'app-projetos-home',
  imports: [ProjetoDivComponent],
  templateUrl: './projetos-home.component.html',
})
export class ProjetosHomeComponent {

  @ViewChild('projetos__titulo', { static: true }) cardRef!: ElementRef;
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
