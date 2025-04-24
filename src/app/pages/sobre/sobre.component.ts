import { Component } from '@angular/core';
import { InicioSobreComponent } from '../../componentes/inicio-sobre/inicio-sobre.component';
import { FrasesCarroselComponent } from "../../componentes/componentesSmall/frases-carrosel/frases-carrosel.component";
import { FrasesHomeComponent } from "../../componentes/frases-home/frases-home.component";
import { FrasesSobreComponent } from "../../componentes/frases-sobre/frases-sobre.component";

@Component({
  selector: 'app-sobre',
  imports: [InicioSobreComponent, FrasesSobreComponent],
  templateUrl: './sobre.component.html',
})
export class SobreComponent {

}
