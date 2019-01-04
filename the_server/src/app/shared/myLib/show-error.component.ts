// https://github.com/DanWahlin/Angular2-Forms/blob/master/src/app/shared/showError.component.ts
import { Component, Host } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroupDirective, NgControl } from '@angular/forms';

@Component({
  selector: 'show-error',
  inputs: ['controlPath: control', 'errorTypes: errors'],
  template: `
     <div  class="show-error" *ngIf="errorMessage !== null" style="color: brown; width:100% ; border-bottom: 2px solid red !important;">
      <!--<ion-icon name='close'></ion-icon>-->
{{errorMessage}}
</div>
  `,

  host:{
    style:  `
        width:calc(100% + 8px);

         `

  }
})
//This class requires NgFormModel to be injected versus NgForm (as in show-error.component.ts)
export class ShowError {

  controlPath: string;
  errorTypes: string[];
  errors: any = {'required': 'This field is required'};

  constructor(@Host() private ngForm: FormGroupDirective) {
    this.ngForm = ngForm;
  }

  get errorMessage(): string {
    const control: NgControl = this.ngForm.directives
        .find(dir => dir.name === this.controlPath);
   // var control = this.ngForm.form.get(this.controlPath);
    if (control !== undefined && control !== null && control.touched) {

      if (control.errors){
        for (var i = 0; i < this.errorTypes.length; i++) {

          if (control.errors.hasOwnProperty(this.errorTypes[i])) {
            return this._errorMessage(this.errorTypes[i]);
          }
        }
    }
    }
    return null;
  }

  private _errorMessage(errorType: string): string {
    return this.errors[errorType];
  }
}