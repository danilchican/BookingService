import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewModule } from 'primeng/tabview';

import { AboutComponent } from './about.component';
import { CarouselNewsComponent } from './components/carousel-news/carousel-news.component';
import { AboutRoutingModule } from './routing/about.routing.module';
import { AboutServiceComponent } from './components/about-service/about-service.component';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    AboutRoutingModule
  ],
  declarations: [
    CarouselNewsComponent,
    AboutComponent,
    AboutServiceComponent
  ]
})
export class AboutModule { }
