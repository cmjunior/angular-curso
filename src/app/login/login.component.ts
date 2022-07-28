import { catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  showPassword = false;
  urlToGo = '';

  botoes = ['icon-google.png', 'facebook.png', 'linkedin.png']

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar, 
  ) { }

  ngOnInit(): void {
    this.createForm();
    
    this.activatedRoute.paramMap.subscribe( params => {
      if ( params.has('url') ) {
        this.urlToGo = params.get('url') || '';
      }
    })
  }

  createForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

  hasError(field: string, erro: string) {
    return this.formLogin.get(field)?.hasError(erro);
  }

  doLogin() {
    this.loginService.login(this.formLogin.value).pipe(
      catchError((error) => {
        return of(error.error)
      })
    ).subscribe( result => {
      if ( result.erro ) {
        this.snackBar.open('Erro ao acessar o sistema', 'OK');
      } else {
        this.router.navigateByUrl(this.urlToGo);
      }
    })
  }

}