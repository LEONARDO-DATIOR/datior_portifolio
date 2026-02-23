import { Component, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { CertificadoComponent } from "../../componentesSmall/certificado/certificado.component";
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, NgForOf } from '@angular/common';
import * as Papa from 'papaparse';  

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
    
    this.http
      .get('assets/datas/CERTIFICADOS-DUCA.csv', { responseType: 'text' })
      .subscribe((textoCsv: string) => {

        const resultado = Papa.parse(textoCsv, {
          header: true,
          skipEmptyLines: true
        });

        this.dadosCsv = resultado.data;
      });
  }

}
