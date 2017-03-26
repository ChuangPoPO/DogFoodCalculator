import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PuppyComponent } from './puppy/puppy.component';
import { AdultNormalComponent } from './adult-normal/adult-normal.component';
import { HomeComponent } from './home/home.component';

import { PuppyService } from './shared/services/puppy.service';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    PuppyComponent,
    AdultNormalComponent,
    HomeComponent
  ],

  providers: [
    PuppyService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
