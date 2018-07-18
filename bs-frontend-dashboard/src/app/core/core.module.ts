import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
