import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedModule,
  DialogModule,
  ButtonModule,
  CheckboxModule  } from 'primeng/primeng';

import { ProjectSharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routing/home.routing.module';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    ProjectSharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    LoginComponent,
    FooterComponent
  ]
})
export class HomeModule { }
