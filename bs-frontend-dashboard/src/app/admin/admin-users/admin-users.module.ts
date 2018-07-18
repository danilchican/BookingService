import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminUsersComponent} from './admin-users.component';
import {AdminUsersRoutingModule} from "./routing/admin-users-routing.module";
import {TableModule} from 'primeng/table';
import {AdminUsersService} from "./services/admin-users.service";

@NgModule({
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    TableModule
  ],
  declarations: [
    AdminUsersComponent
  ],
  providers: [
    AdminUsersService
  ]
})
export class AdminUsersModule {
}
