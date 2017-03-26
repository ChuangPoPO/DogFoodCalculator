import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RawLessOneYearComponent } from './raw-less-one-year/raw-less-one-year.component';
import { KibbleSalmonMealComponent } from './kibble-salmon-meal/kibble-salmon-meal.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'raw-less-one-year', component: RawLessOneYearComponent},
  { path: 'kibble-salmon-meal', component: KibbleSalmonMealComponent },
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
