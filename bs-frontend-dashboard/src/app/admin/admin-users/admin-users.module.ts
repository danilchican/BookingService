import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import {AdminUsersComponent} from './admin-users.component';
import {AdminUsersRoutingModule} from "./routing/admin-users-routing.module";
import {AdminUsersService} from "./services/admin-users.service";
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    AdminUsersComponent,
    CreateUserComponent
  ],
  providers: [
    AdminUsersService
  ]
})
export class AdminUsersModule {
}
