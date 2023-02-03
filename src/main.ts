import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/app.module';
import { BaseModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';
import { JobModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(BaseModule)
  .catch(err => console.error(err));
