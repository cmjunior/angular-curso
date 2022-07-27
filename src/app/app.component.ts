import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('btn') botao: any;

  title = 'Curso de Angular';
  data = new Date()

  alterarTitulo(botao: any) {
    this.title = botao;
  }
}
