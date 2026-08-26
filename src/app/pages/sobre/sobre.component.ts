import { Component } from '@angular/core';
import { InicioSobreComponent } from '../../componentes/Sobre_componentes/inicio-sobre/inicio-sobre.component';
import { TextoSobreComponent } from '../../componentes/Sobre_componentes/texto-sobre/texto-sobre.component';
import { ApresentacaoComponent } from '../../componentes/Generico/apresentacao/apresentacao.component';
import { ContatoFormComponent } from '../../componentes/Generico/contato-form/contato-form.component';

@Component({
    selector: 'app-sobre',
    imports: [
        InicioSobreComponent,
        TextoSobreComponent,
        ApresentacaoComponent,
        ContatoFormComponent,
    ],
    templateUrl: './sobre.component.html',
})
export class SobreComponent {}
