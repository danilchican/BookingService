import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminUsersComponent} from './admin-users.component';
import {AdminUsersRoutingModule} from "./routing/admin-users-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminUsersRoutingModule

  ],
  declarations: [
    AdminUsersComponent
  ]
})
export class AdminUsersModule {
}
