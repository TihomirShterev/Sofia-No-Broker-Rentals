import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: 'item',
    pathMatch: 'full',
    component: ItemComponent,
    data: {
      title: 'ITEM'
    }
  },
  {
    path: 'item/details/:id',
    component: DetailsComponent,
    data: {
      title: 'ITEM DETAIL'
    }
  }
];

export const ItemRouterModule = RouterModule.forChild(routes);