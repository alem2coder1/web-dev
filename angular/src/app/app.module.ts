import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list.module'; // 导入 ProductListModule

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ProductListModule // 将 ProductListModule 添加到 imports 数组中
  ],
  providers: [],
})
export class AppModule { }
