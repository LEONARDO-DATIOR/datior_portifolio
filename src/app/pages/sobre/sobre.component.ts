import { Component } from '@angular/core';
import { InicioSobreComponent } from '../../componentes/inicio-sobre/inicio-sobre.component';
import { FrasesCarroselComponent } from "../../componentes/componentesSmall/frases-carrosel/frases-carrosel.component";
import { FrasesHomeComponent } from "../../componentes/frases-home/frases-home.component";
import { FrasesSobreComponent } from "../../componentes/frases-sobre/frases-sobre.component";
import { TextoSobreComponent } from '../../componentes/texto-sobre/texto-sobre.component';
import { ApresentacaoComponent } from "../../componentes/apresentacao/apresentacao.component";
import { ContatoHomeComponent } from "../../componentes/contato-home/contato-home.component";

@Component({
  selector: 'app-sobre',
  imports: [InicioSobreComponent, FrasesSobreComponent, TextoSobreComponent, ApresentacaoComponent, ContatoHomeComponent],
  templateUrl: './sobre.component.html',
})
export class SobreComponent {

}
