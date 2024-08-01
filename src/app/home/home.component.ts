import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('sobreMim', { static: false }) sobreMim!: ElementRef;
  @ViewChild('experiencias', { static: false }) experiencias!: ElementRef;
  @ViewChild('formacao', { static: false }) formacao!: ElementRef;
  @ViewChild('habilidades', { static: false }) habilidades!: ElementRef;
  @ViewChild('projetos', { static: false }) projetos!: ElementRef;
  @ViewChild('contato', { static: false }) contato!: ElementRef;

  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
  ];

  ngAfterViewInit(): void {}

  scrollToSection(section: string) {
    let element: HTMLElement;

    switch (section) {
      case 'sobreMim':
        element = this.sobreMim.nativeElement;
        break;
      case 'experiencias':
        element = this.experiencias.nativeElement;
        break;
      case 'formacao':
        element = this.formacao.nativeElement;
        break;
      case 'habilidades':
        element = this.habilidades.nativeElement;
        break;
      case 'projetos':
        element = this.projetos.nativeElement;
        break;
      case 'contato':
        element = this.contato.nativeElement;
        break;
      default:
        return;
    }

    this.scrollToElement(element);
  }

  scrollToElement(element: HTMLElement) {
    const yOffset = window.innerHeight * 0.1;
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  openEmail() {
    const email = 'pierre.passos.dev@gmail.com';
    const subject = 'Saudações Pierre';
    const body = `
    Olá Pierre !
    
    Estou entrando em contato para conhecer melhor seus conhecimentos em programação, gostaria de ter a oportunidade de discutir, detalhes sobre suas experiências, seus conhecimentos em linguagens de programação, projetos anteriores, áreas de especialização.
    
    Fico no aguardo de sua resposta.
    
    Atenciosamente,
    [Seu Nome]
    [Empresa]
    [Telefone]
    `;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
  

}
