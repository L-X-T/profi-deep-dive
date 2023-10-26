// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES), HttpClientModule, BrowserModule, FlightBookingModule, SharedModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  declarations: [AppComponent, SidebarComponent, NavbarComponent, HomeComponent, AboutComponent, NotFoundComponent, BasketComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
