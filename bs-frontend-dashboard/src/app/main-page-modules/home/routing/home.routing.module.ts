import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        loadChildren: 'app/main-page-modules/about/about.module#AboutModule'
      },
      {
        path: 'registration',
        loadChildren: 'app/main-page-modules/registration/registration.module#RegistrationModule'
      },
      {
        path: 'admin',
        loadChildren: 'app/admin/admin-page/admin-page.module#AdminPageModule'
      },
      { path: '**', redirectTo: 'about', pathMatch: 'full' }
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
export class HomeRoutingModule { }
