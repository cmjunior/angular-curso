import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-customizado',
  templateUrl: './botao-customizado.component.html',
  styleUrls: ['./botao-customizado.component.scss']
})
export class BotaoCustomizadoComponent {
  @Input() texto = "Clique"
  @Input() formatar = false
  @Output() clicked = new EventEmitter<any>();

  onClick() {
    console.log(`${this.texto} clicked`);
    this.clicked.emit(this.texto);
  }

}
