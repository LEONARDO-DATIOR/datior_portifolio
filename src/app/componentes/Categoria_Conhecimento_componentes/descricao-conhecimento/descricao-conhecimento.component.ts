import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descricao-conhecimento',
  imports: [],
  templateUrl: './descricao-conhecimento.component.html',
  styleUrl: './descricao-conhecimento.component.css'
})
export class DescricaoConhecimentoComponent {
  dicionarioConhecimento: { [key: string]: string } = {
    'FRONT-END': 'O conhecimento em front-end envolve a criação e desenvolvimento da interface visual de um site ou aplicativo, utilizando tecnologias como HTML, CSS e JavaScript para garantir uma experiência de usuário atraente e funcional.',
    'GERENCIAMENTO DE PROJETOS': 'O conhecimento em gerenciamento de projetos envolve a aplicação de técnicas e ferramentas para planejar, organizar e controlar recursos, prazos e equipes, visando alcançar os objetivos do projeto de forma eficiente e eficaz.',
    'BACK-END': 'O conhecimento em back-end envolve o desenvolvimento da parte do servidor de um site ou aplicativo, utilizando linguagens de programação como Python, Java ou Node.js para criar a lógica de negócios, gerenciar bancos de dados e garantir a funcionalidade do sistema.',
    'DESIGN': 'O conhecimento em design envolve a criação de elementos visuais e estéticos para comunicar mensagens de forma eficaz, utilizando princípios de composição, cor, tipografia e usabilidade para criar experiências visuais atraentes e funcionais.',
    'ANÁLISE DE DADOS': 'O conhecimento em análise de dados envolve a coleta, organização e interpretação de grandes volumes de dados para identificar padrões, tendências e insights que possam orientar a tomada de decisões estratégicas em diversos contextos, como negócios, ciência e tecnologia.',
    'INFRAESTRUTURA': 'O conhecimento em infraestrutura envolve a compreensão e gestão dos recursos tecnológicos necessários para suportar o funcionamento de sistemas, redes e serviços, incluindo hardware, software, redes e segurança, garantindo a disponibilidade, confiabilidade e desempenho dos ambientes de TI.'
  }

  @Input() conhecimento: string = 'BACK-END';
}
