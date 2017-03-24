import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RawLessOneYearComponent } from './raw.less.one.year.component';
import { KibbleSalmonMealComponent } from './kibble.salmon.meal.component';
import { DashboardComponent } from './dashboard.component';

import { RawLessoneyearService } from './raw.lessoneyear.service';



@NgModule({
  declarations: [
    AppComponent,
    RawLessOneYearComponent,
    KibbleSalmonMealComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
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
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],

  providers: [
    RawLessoneyearService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
