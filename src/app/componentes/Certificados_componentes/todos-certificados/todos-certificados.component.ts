import {
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    PLATFORM_ID,
    ViewChild,
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
    @ViewChild('btn_exibir_filtro') btnExibir!: ElementRef;
    @ViewChild('btn_fechar_filtro') btnFechar!: ElementRef;
    @ViewChild('div_filtros') divFiltros!: ElementRef;

    dadosCsv: any[] = [];
    certificadosFiltrados: any[] = [];
    categoriaSelecionada = 'todos';

    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    exibirFiltros(exibir: boolean) {
        if (exibir) {
            this.btnExibir.nativeElement.style.display = 'none';
            this.divFiltros.nativeElement.style.display = 'flex';
            this.btnFechar.nativeElement.style.display = 'flex';
        } else {
            this.btnExibir.nativeElement.style.display = 'block';
            this.divFiltros.nativeElement.style.display = 'none';
            this.btnFechar.nativeElement.style.display = 'none';
        }
    }

    filtrarCategoria(categoria: string): void {
        this.categoriaSelecionada = categoria;

        if (categoria == 'todos') {
            this.certificadosFiltrados = [...this.dadosCsv];
        } else if (
            categoria === 'BACK-END' ||
            categoria === 'PROGRAMAÇÃO / ALGORITMO' ||
            categoria === 'ANALISE DE DADOS'
        ) {
            this.certificadosFiltrados = this.dadosCsv.filter(
                (certificado) =>
                    certificado['CATEGORIA'] === 'BACK-END' ||
                    certificado['CATEGORIA'] === 'PROGRAMAÇÃO / ALGORITMO' ||
                    certificado['CATEGORIA'] === 'ANALISE DE DADOS',
            );
        } else {
            this.certificadosFiltrados = this.dadosCsv.filter(
                (certificado) => certificado['CATEGORIA'] === categoria,
            );
        }
    }

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
                this.filtrarCategoria('todos');
            });
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
    }

    // LOGICA CARROSEL
    @Input() carrosel: boolean = false;

    indiceAtual = 0;
    quantidadeVisivel = 3;

    @HostListener('window:resize')
    onResize(): void {
        this.atualizarExibicaoCarrosel();
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
