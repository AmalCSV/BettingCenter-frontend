import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
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
        component: CreateComponent,
        data: {
          title: 'Create'
        }
      },
      {
        path: 'list',
        component: ListComponent,
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
