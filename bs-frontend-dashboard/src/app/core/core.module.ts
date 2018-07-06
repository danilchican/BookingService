import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  JwtModule,
  JWT_OPTIONS } from '@auth0/angular-jwt';

import { authHttpFactory } from './authenticate/factories/auth-http.factory';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: authHttpFactory,
        deps: []
      }
    })
  ],
  providers: [
  ],
  declarations: []
})
export class CoreModule { }
