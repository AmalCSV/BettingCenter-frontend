import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'create'
      },
      {
        path: 'create',
        component: CreateUserComponent,
        data: {
          title: 'Create'
        }
      },
      {
        path: 'list',
        component: ListUserComponent,
        data: {
          title: 'Create'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
