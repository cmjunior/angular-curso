import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('btn') botao: any;

  title = 'angular-curso';

  alterarTitulo(botao: any) {
    this.title = botao;
  }
}
