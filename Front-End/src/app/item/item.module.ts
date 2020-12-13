import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { ItemRouterModule } from './item-routing.module';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ItemRouterModule
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
