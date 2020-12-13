import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
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
    path: 'item/create',
    component: CreateComponent,
    data: {
      title: 'CREATE ITEM'
    }
  },
  {
    path: 'item/details/:id',
    component: DetailsComponent,
    data: {
      title: 'ITEM DETAILS'
    }
  }
];

export const ItemRouterModule = RouterModule.forChild(routes);