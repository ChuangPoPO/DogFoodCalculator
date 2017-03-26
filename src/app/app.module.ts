import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RawLessOneYearComponent } from './raw-less-one-year/raw-less-one-year.component';
import { KibbleSalmonMealComponent } from './kibble-salmon-meal/kibble-salmon-meal.component';
import { HomeComponent } from './home/home.component';

import { RawLessOneYearService } from './shared/services/raw-less-one-year.service';



@NgModule({
  declarations: [
    AppComponent,
    RawLessOneYearComponent,
    KibbleSalmonMealComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'raw-less-one-year',
        component: RawLessOneYearComponent
      },
      {
        path: 'kibble-salmon-meal',
        component: KibbleSalmonMealComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],

  providers: [
    RawLessOneYearService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
