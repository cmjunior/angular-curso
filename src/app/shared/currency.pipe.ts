import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits: boolean = true): any {
    if ( isNaN(value) ) {
      return value
    }

    let numValue: number = parseFloat(value)
    if ( isNaN(numValue) ) {
      return ''
    }

    let result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 
      currencyCode}).format(numValue);
    
    if ( digits == false ) {
      result = result.substring(0, result.length - 3)
    }
    
    return ( symbolDisplay ? result : result.replace('R$', ''))
  }
}
