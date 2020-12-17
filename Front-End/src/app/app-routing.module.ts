import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/home"
      },
      {
        path: "home",
        component: HomeComponent,
        data: {
          title: "HOME"
        }
      },
      {
        path: 'user',
        canActivateChild: [AuthGuard],
        loadChildren: () => import("./user/user.module").then(m => m.UserModule) // lazy loading
      },
      {
        path: 'item',
        canActivateChild: [AuthGuard],
        loadChildren: () => import("./item/item.module").then(m => m.ItemModule) // lazy loading
      },
      {
        path: "**",
        component: PageNotFoundComponent,
        data: {
          title: "404"
        }
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);