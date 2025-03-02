import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainAppComponent } from './main-app/main-app.component';

export const routes = [
  {path:"",component:MainPageComponent},
  {path:"app",component:MainAppComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
