import { Component } from '@angular/core';
import { InicioHomeComponent } from "../../componentes/inicio-home/inicio-home.component";
import { ProjetosHomeComponent } from '../../componentes/projetos-home/projetos-home.component';
import { FrasesHomeComponent } from '../../componentes/frases-home/frases-home.component';
import { SobreComponent } from "../sobre/sobre.component";
import { SobreHomeComponent } from "../../componentes/sobre-home/sobre-home.component";
import { ContatoHomeComponent } from "../../componentes/contato-home/contato-home.component";

@Component({
  selector: 'app-home',
  imports: [InicioHomeComponent, ProjetosHomeComponent, FrasesHomeComponent, SobreHomeComponent, ContatoHomeComponent],
  templateUrl: './home.component.html',
  styles: ['./home.component.css'],
})
export class HomeComponent {

}
