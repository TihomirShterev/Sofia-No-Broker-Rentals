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