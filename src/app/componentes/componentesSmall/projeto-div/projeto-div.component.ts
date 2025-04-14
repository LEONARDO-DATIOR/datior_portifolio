import {  Component,
  ElementRef,
  Input,
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-projeto-div',
  imports: [],
  templateUrl: './projeto-div.component.html',
})
export class ProjetoDivComponent {
  @Input() titulo_projeto: string = '';
  @Input() descricao_projeto: string = '';
  @Input() caminho_imagem: string = '';
  @Input() link_projeto: string = '#';

  @ViewChild('projeto', { static: true }) cardRef!: ElementRef;
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
