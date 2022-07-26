import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastroService } from './cadastro.service';

const routes: Routes = [
  { path: '', component: CadastroComponent }
]

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    CadastroService,
  ]
})
export class CadastroModule { }
