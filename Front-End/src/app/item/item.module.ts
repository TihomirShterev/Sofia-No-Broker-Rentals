import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ItemsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemsComponent,
    DetailsComponent
  ]
})
export class ItemModule { }
