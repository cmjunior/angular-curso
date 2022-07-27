import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompareFieldsValidator } from '../shared/compare-fields';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
      zip: [''],
      number: [''],
      complement: [''],
    }, {validators: [
      CompareFieldsValidator('password', 'passwordConfirm')
    ]});
  }
}
