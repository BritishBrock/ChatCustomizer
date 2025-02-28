import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from "./message/message.component";
import { StyleSectionComponent } from './style-section/style-section.component';
import { InfoComponent } from './info/info.component';
import { MultiComponent } from './form-inputs/multi/multi.component';
import { TextComponent } from './form-inputs/text/text.component';
import { ColorComponent } from './form-inputs/color/color.component';



@NgModule({
  declarations: [AppComponent,MessageComponent,
    StyleSectionComponent,InfoComponent, MultiComponent, TextComponent, ColorComponent],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
