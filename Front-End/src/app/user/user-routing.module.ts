import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'user',
    canActivateChild: [
      AuthGuard
    ],
    data: {
      testing: 123
    },
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: false,
          noNavigation: true,
          title: 'REGISTER USER'
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false,
          title: 'USER LOGIN'
        }
      }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);