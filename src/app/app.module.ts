import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BinhChonComponent } from './binh-chon/binh-chon.component';

@NgModule({
  declarations: [
    AppComponent,
    BinhChonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
