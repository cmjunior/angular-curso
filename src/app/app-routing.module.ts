import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin/admin.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule )
  },
  { path: 'login', component: LoginComponent },
  { path: 'login/:url', component: LoginComponent },
  { 
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule )
  },
  { 
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule ),
    canActivate: [AdminGuard]
  },
  { 
    path: 'area-restrita',
    loadChildren: () => import('./restrita/restrita.module').then((m) => m.RestritaModule )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
