import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private _buscandoCEP = new BehaviorSubject<boolean>(false);

  get buscandoCEP() {
    return this._buscandoCEP.asObservable();
  }

  url(cep: string) {
    return `https://viacep.com.br/ws/${cep}/json/`;
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  buscaCEP(cep: string) {
    this._buscandoCEP.next(true);
    return this.httpClient.get(this.url(cep)).pipe(
      finalize(() => {
        setTimeout(() => {
          this._buscandoCEP.next(false);
        }, 1000);
      })
    )
  }
}
