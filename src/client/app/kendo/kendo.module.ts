import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { KendoComponent } from './kendo.component';
import { KendoRoutingModule } from './kendo-routing.module';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ButtonsModule,
    GridModule,
    KendoRoutingModule
  ],
  declarations: [ KendoComponent ],
  exports: [ KendoComponent ]
})

export class KendoModule { }
