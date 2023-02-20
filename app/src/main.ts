import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';

enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

