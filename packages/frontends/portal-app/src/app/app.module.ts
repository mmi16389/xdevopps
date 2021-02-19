import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

export const HERO_DI_CONFIG = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection',
};

@NgModule({
  declarations: [AppComponent, MonPremierComponent, AppareilComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
