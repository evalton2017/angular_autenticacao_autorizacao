import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { CpfValidator } from './validators/cpf.validator';



@NgModule({
  declarations: [
    MascaraDirective
  ],
  exports: [
    MascaraDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
