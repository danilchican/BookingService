import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page.component';
import {AdminPageRoutingModule} from "./routing/admin-page.routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ],
  declarations: [
    AdminPageComponent
  ]
})
export class AdminPageModule { }
