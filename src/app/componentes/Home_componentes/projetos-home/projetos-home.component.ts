import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoDivComponent } from '../../componentesSmall/projeto-div/projeto-div.component';

@Component({
  selector: 'app-projetos-home',
  imports: [ProjetoDivComponent],
  templateUrl: './projetos-home.component.html',
})
export class ProjetosHomeComponent {
}