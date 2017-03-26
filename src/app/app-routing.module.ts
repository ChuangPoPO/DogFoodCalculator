import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PuppyComponent } from './puppy/puppy.component';
import { AdultNormalComponent } from './adult-normal/adult-normal.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'puppy', component: PuppyComponent},
  { path: 'adult-normal', component: AdultNormalComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
