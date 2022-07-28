import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AreaRestritaComponent }
]

@NgModule({
  declarations: [
    AreaRestritaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestritaModule { }
