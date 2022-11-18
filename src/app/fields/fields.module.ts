import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from './inputs/inputs.module';
import { CrushGapFieldModule } from './crush-gap-field/crush-gap-field.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputsModule,
    CrushGapFieldModule
  ],
  exports: [
    CommonModule,
    InputsModule
  ]
})
export class FieldsModule { }
