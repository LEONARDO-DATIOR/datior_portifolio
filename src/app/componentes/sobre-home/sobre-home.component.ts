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


  // textoSobre:string = " Jovem talento de 22 anos, formado em análise e desenvolvimento de sistemas, com mais de três anos de experiência profissional na área de tecnologia. Desenvolvedor de software com uma sólida base, atualmente ocupa o cargo de analista de infraestrutura na Localiza, pela DXC. Um profissional dinâmico e apaixonado, com comprovada capacidade de resolver problemas complexos e um forte desejo de aprender e crescer no mundo da tecnologia. Sua experiência abrange desde o desenvolvimento de software até a gestão de infraestruturas, oferecendo uma perspectiva completa e versátil. Com uma sólida base teórica e vasta experiência prática, é capaz de enfrentar desafios complexos e contribuir significativamente para o sucesso de qualquer projeto."; 
  // textoDigitado:string = "";
  // index:number = 0;

  // ngOnInit() {
  //   this.digitarTexto();
  // }

  // digitarTexto() {
  //   console.log("Iniciando digitação do texto...");
  //   const intervalo = setInterval(() => {
  //     if (this.index < this.textoSobre.length) {
  //       this.textoDigitado += this.textoSobre.charAt(this.index);
  //       this.index++;
  //     } else {
  //       clearInterval(intervalo);
  //     }
  //   }, 1000)
  // }


}
