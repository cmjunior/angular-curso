import { Directive, ElementRef } from '@angular/core';
var VMasker = require('vanilla-masker');

@Directive({
  selector: '[cpfCnpj]'
})
export class CpfCnpjDirective {
  private nativeElement;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.nativeElement = elementRef.nativeElement;

    const CPF = "999.999.999-99";
    const CNPJ = "99.999.999/9999-99";
    
    this.nativeElement.addEventListener('input', (event: any) => {
      const mask = event.target.value.trim().replace(/[_\W]+/g,'').length > 11 ? CNPJ : CPF;
      VMasker(this.nativeElement).maskPattern(mask);
    });
  }

}
