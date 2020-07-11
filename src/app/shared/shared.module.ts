import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { CpfValidator } from './validators/cpf.validator';
import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';
import { TipoPipe } from './pipes/tipo.pipe';
import { DataPipe } from './pipes/data.pipe';



@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  exports: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ], 
  providers:[
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
