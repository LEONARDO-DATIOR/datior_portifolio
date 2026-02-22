import { Component, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { CertificadoComponent } from "../../componentesSmall/certificado/certificado.component";
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, NgForOf } from '@angular/common';

@Component({
  selector: 'app-todos-certificados',
  imports: [CertificadoComponent, NgForOf],
templateUrl: './todos-certificados.component.html',
})
export class TodosCertificadosComponent {
  dadosCsv: any[] = [];

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.http.get('assets/datas/CERTIFICADOS-DUCA.csv', { responseType: 'text' })
      .subscribe((textoCsv: string) => {
        const linhas: string[] = textoCsv
          .split('\n')
          .map((l: string) => l.trim())
          .filter((l: string) => l.length > 0);
        
        const headers: string[] = linhas[0].split(',');

        const json = linhas.slice(1).map((linha: string) => {
          const valores = linha.split(',');
          const objetoCurso: any = {};
          headers.forEach((h: string, i: number) => {
            objetoCurso[h] = valores[i];
          })

          return objetoCurso;
        })
        this.dadosCsv = json;
      });
  }

}
