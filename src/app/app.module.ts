import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { MessageComponent } from "./message/message.component";
import { StyleSectionComponent } from './style-section/style-section.component';



@NgModule({
  declarations: [AppComponent,MessageComponent,
    StyleSectionComponent],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
