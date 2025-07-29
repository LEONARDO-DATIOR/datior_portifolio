import { Component } from '@angular/core';
import { ProjetosHomeComponent } from '../../componentes/Home_componentes/projetos-home/projetos-home.component';
import { SobreHomeComponent } from "../../componentes/Home_componentes/sobre-home/sobre-home.component";
import { ContatoHomeComponent } from "../../componentes/Generico/contato/contato-home.component";
import { ApresentacaoComponent } from "../../componentes/Generico/apresentacao/apresentacao.component";

@Component({
  selector: 'app-home',
  imports: [ProjetosHomeComponent,  SobreHomeComponent, ContatoHomeComponent, ApresentacaoComponent],
  templateUrl: './home.component.html',
  styles: ['./home.component.css'],
})
export class HomeComponent {

}
