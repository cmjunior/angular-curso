import { FormGroup } from '@angular/forms';

export function CompareFieldsValidator(
    control: string, 
    matchControl: string, 
    errorName: string = 'controls_match')
{
    return (formGroup: FormGroup) => {
        const _control = formGroup.get(control)
        const _matchControl = formGroup.get(matchControl)

        if ( _control && _matchControl && _control.value !== _matchControl.value ) {
            _matchControl.setErrors({[errorName]: true})
            return {[errorName]: true}
        }

        _matchControl!.setErrors(null)
        return null
    }
}