import { Component, ElementRef, ViewChild } from '@angular/core';
import { FrasesCarroselComponent } from '../componentesSmall/frases-carrosel/frases-carrosel.component';

@Component({
  selector: 'app-frases-home',
  imports: [FrasesCarroselComponent],
  templateUrl: './frases-home.component.html',
})
export class FrasesHomeComponent {

  @ViewChild('frases_titulos', { static: false }) cardRef!: ElementRef;
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

}
