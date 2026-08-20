import { Component } from '@angular/core';
import { ProjetosHomeComponent } from '../../componentes/Home_componentes/projetos-home/projetos-home.component';
import { SobreHomeComponent } from '../../componentes/Home_componentes/sobre-home/sobre-home.component';
import { ContatoHomeComponent } from '../../componentes/Generico/contato/contato-home.component';
import { ApresentacaoComponent } from '../../componentes/Generico/apresentacao/apresentacao.component';
import { PopupComponent } from '../../componentes/Generico/popup/popup.component';
import { TodosCertificadosComponent } from "../../componentes/Certificados_componentes/todos-certificados/todos-certificados.component";

@Component({
    selector: 'app-home',
    imports: [
        ProjetosHomeComponent,
        SobreHomeComponent,
        ContatoHomeComponent,
        ApresentacaoComponent,
        PopupComponent,
        TodosCertificadosComponent
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
