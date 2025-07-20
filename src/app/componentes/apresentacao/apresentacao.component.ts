import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.component.html',
})
export class ApresentacaoComponent {
 
  @ViewChild('video', { static: true }) cardRef!: ElementRef;
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
