import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { ContatoComponent} from './pages/contato/contato.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'Sobre', component: SobreComponent},
    {path: 'Contato', component: ContatoComponent},
    // {path: 'Certificados',}
    // {path: 'Contato',}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }