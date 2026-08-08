import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjetoDivComponent } from '../../componentesSmall/projeto-div/projeto-div.component';

@Component({
    selector: 'app-projetos-home',
    imports: [ProjetoDivComponent],
    templateUrl: './projetos-home.component.html',
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
                'Projeto desenvolvido para monitoramento e diagnóstico de equipamentos, com coleta e análise de informações de hardware e sistema. A solução permite identificar falhas, anomalias e possíveis gargalos de desempenho, além de gerar relatórios técnicos para auxiliar na análise e manutenção das máquinas.',
            caminho_imagem:
                '/../../../assets/imagens/projetos/Overdrive-info.png',
            link_github: 'https://github.com/LEONARDO-DATIOR/datior_portifolio',
            tecnologias: ['Python', 'Playwright'],
        },
    ];
}
