import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home-component/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent},
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ProductListComponent
  ],
  providers: [CurrencyPipe],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
