import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ItemService
  ],
  exports: [
    ItemsComponent,
    ItemComponent
  ]
})
export class ItemModule { }
