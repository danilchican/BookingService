import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "../admin-page.component";

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: 'app/admin/admin-users/admin-users.module#AdminUsersModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminPageRoutingModule { }
