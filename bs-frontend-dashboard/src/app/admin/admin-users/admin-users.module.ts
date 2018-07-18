import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import {AdminUsersComponent} from './admin-users.component';
import {AdminUsersRoutingModule} from "./routing/admin-users-routing.module";
import {AdminUsersService} from "./services/admin-users.service";
import { CreateUserComponent } from './components/create-user/create-user.component';
import {ButtonModule, InputTextModule} from "primeng/primeng";
import {ProjectSharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    AdminUsersRoutingModule,
    ProjectSharedModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule
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
