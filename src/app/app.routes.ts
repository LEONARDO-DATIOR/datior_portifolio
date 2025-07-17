import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { ContatoComponent} from './pages/contato/contato.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'certificados', component: CertificadosComponent}
    // {path: 'Certificados',}
    // {path: 'Contato',}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }