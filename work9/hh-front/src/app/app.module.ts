// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // 导入 HttpClientModule

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    CompaniesComponent
  ],
  providers: [],

})
export class AppModule { }
