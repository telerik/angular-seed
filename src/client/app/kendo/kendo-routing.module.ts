import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KendoComponent } from './kendo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'kendo', component: KendoComponent }
    ])
  ],
  exports: [RouterModule]
})
export class KendoRoutingModule { }
