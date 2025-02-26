import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { MessageComponent } from "./message/message.component";



@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    MessageComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
