import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidatorDirective } from './email-validator.directive';
import { LimitLengthPipe } from './limit-length.pipe';

@NgModule({
  declarations: [
    EmailValidatorDirective,
    LimitLengthPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailValidatorDirective,
    LimitLengthPipe
  ]
})
export class SharedModule { }
