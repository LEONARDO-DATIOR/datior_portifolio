import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoComponent } from '../../componentesSmall/projeto/projeto.component';

@Component({
    selector: 'app-projetos-home',
    imports: [ProjetoComponent],
    templateUrl: './projetos-home.component.html',
    styleUrl: './projetos-home.component.scss',
})
export class ProjetosHomeComponent {
    projetos = [
        {
            titulo: 'Datior Home',
            descricao:
                'Este é o projeto que você está vendo agora. Ele é o meu portfólio pessoal, onde compartilho minha trajetória, conquistas e habilidades.',
            caminho_imagem:
                '/../../../assets/imagens/projetos/projeto_portifolio.png',
            link_github: 'https://github.com/LEONARDO-DATIOR/datior_portifolio',
            tecnologias: ['Angular', 'HTML', 'SCSS', 'TypeScript'],
        },
        {
            titulo: 'Overdrive-Info',
            descricao:
                'Projeto desenvolvido para monitoramento e diagnóstico de equipamentos, com coleta e análise de informações de hardware e sistema.',
            caminho_imagem:
                '/../../../assets/imagens/projetos/Overdrive-info.png',
            link_github: 'https://github.com/LEONARDO-DATIOR/datior_portifolio',
            tecnologias: ['Python', 'Playwright'],
        },
    ];
}
