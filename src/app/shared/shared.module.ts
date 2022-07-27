import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoCustomizadoComponent } from './botao-customizado/botao-customizado.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormatarPipe } from './formatar.pipe';
import { CpfCnpjDirective } from './cpf-cnpj.directive';

@NgModule({
  declarations: [
    BotaoCustomizadoComponent,
    FormatarPipe,
    CpfCnpjDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BotaoCustomizadoComponent,
    FormatarPipe,
    CpfCnpjDirective
  ]
})
export class SharedModule { }
