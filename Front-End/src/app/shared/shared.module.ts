import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IsEmptyDirective } from './is-empty.directive';
import { LoaderComponent } from './loader/loader.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    // IsEmptyDirective,
    LoaderComponent,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // IsEmptyDirective
    LoaderComponent,
    EmailValidatorDirective
  ]
})
export class SharedModule { }
