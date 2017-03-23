import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RawLessOneYearComponent } from './raw.less.one.year.component';

import { RawLessoneyearService } from './raw.lessoneyear.service';


@NgModule({
  declarations: [
    AppComponent,
    RawLessOneYearComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'raw-less-one-year',
        component: RawLessOneYearComponent
      }
    ])
  ],

  providers: [
    RawLessoneyearService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
