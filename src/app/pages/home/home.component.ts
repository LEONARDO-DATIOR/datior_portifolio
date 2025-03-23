import { Component } from '@angular/core';
import { InicioHomeComponent } from "../../componentes/inicio-home/inicio-home.component";
import { ProjetosHomeComponent } from '../../componentes/projetos-home/projetos-home.component';
import { FrasesHomeComponent } from '../../componentes/frases-home/frases-home.component';

@Component({
  selector: 'app-home',
  imports: [InicioHomeComponent, ProjetosHomeComponent, FrasesHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
