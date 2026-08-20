import {
    Component,
    HostListener,
    Inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';
import { CertificadoComponent } from '../../componentesSmall/certificado/certificado.component';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, NgForOf, CommonModule } from '@angular/common';
import * as Papa from 'papaparse';

@Component({
    selector: 'app-todos-certificados',
    imports: [CertificadoComponent, NgForOf, CommonModule],
    templateUrl: './todos-certificados.component.html',
})
export class TodosCertificadosComponent {
    @Input() carrosel: boolean = false;

    dadosCsv: any[] = [];

    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        this.atualizarExibicaoCarrosel();

        this.http
            .get('assets/datas/CERTIFICADOS-DUCA.csv', { responseType: 'text' })
            .subscribe((textoCsv: string) => {
                const resultado = Papa.parse(textoCsv, {
                    header: true,
                    skipEmptyLines: true,
                });

                this.dadosCsv = resultado.data;
            });
    }

    // LOGICA CARROSEL
    indiceAtual = 0;
    quantidadeVisivel = 3;

    @HostListener('window:resize')
    onResize(): void {
        this.atualizarExibicaoCarrosel();
    }

    private atualizarExibicaoCarrosel(): void {
        const tamanhoDatela = window.innerWidth;

        if (tamanhoDatela <= 1100) {
            this.quantidadeVisivel = 1;
        } else if (tamanhoDatela <= 1580) {
            this.quantidadeVisivel = 2;
        } else {
            this.quantidadeVisivel = 3;
        }
        console.log(tamanhoDatela + ' - ' + this.quantidadeVisivel);
    }

    get certificadosVisiveis() {
        return this.dadosCsv.slice(
            this.indiceAtual,
            this.indiceAtual + this.quantidadeVisivel,
        );
    }

    proximo(): void {
        if (this.indiceAtual < this.dadosCsv.length - this.quantidadeVisivel) {
            this.indiceAtual++;
        } else {
            this.indiceAtual = 0;
        }
    }

    anterior(): void {
        if (this.indiceAtual > 0) {
            this.indiceAtual--;
        } else {
            this.indiceAtual = Math.max(
                0,
                this.dadosCsv.length - this.quantidadeVisivel,
            );
        }
    }
}
