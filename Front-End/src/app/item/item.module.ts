import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { ItemRouterModule } from './item-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ItemRouterModule
  ],
  providers: [
    ItemService
  ],
  exports: [
    ItemsComponent,
    ItemComponent,
    DetailsComponent
  ]
})
export class ItemModule { }
