import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
