import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, map, Observable } from 'rxjs';
import { CepService } from '../shared/cep.service';
import { CompareFieldsValidator } from '../shared/compare-fields';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {
  formCadastro!: FormGroup;
  buscandoCEP$!: Observable<boolean>;

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }  

  ngOnInit(): void {
    this.buscandoCEP$ = this.cepService.buscandoCEP;
    
    this.formCadastro = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
      zip: [''],
      number: [''],
      complement: [''],
      address: [{value: '', disabled: true}],
    }, {validators: [
      CompareFieldsValidator('password', 'passwordConfirm')
    ]});
  }

  ngAfterViewInit(): void {
    if ( this.formCadastro ) {
      this.formCadastro.get('zip')!.valueChanges.pipe(
        debounceTime(500),
        map( (cep: string) => {
          return cep.trim().replace(/[_\W]+/g,'').length == 8 ? cep : undefined;
        })
      ).subscribe( (cep: string | undefined) => {
        console.log(cep);
        if ( cep ) {
          this.buscarCep(cep);
        }
      });
    }
  }

  buscarCep(cep: string) {
    this.cepService.buscaCEP(cep).subscribe( (result: any) => {
      if ( result.erro ) {
        this.formCadastro.get('address')!.setValue('');
        this.snackBar.open('CEP não encontrado', 'OK');
      } else {
        const { logradouro, bairro, localidade, uf } = result;
        this.formCadastro.get('address')!.setValue(
          `Endereço: ${logradouro}, ${bairro}, ${localidade}, ${uf}`
        );
      }
    })
  }

}
