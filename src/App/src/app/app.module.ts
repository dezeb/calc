import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcModule } from './modules/calc/calc.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
