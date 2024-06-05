import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AdminModule } from './view/admin/admin.module';
import { ComponentModule } from './components/component.module';
import { EnvironmentImagesModule } from './view/admin/environment-images/environment-images.module';
import { ViewModule } from './view/view.module';
import { AdminGuardService } from './mock/admin-guard.service';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        AdminModule,
        ComponentModule,
        EnvironmentImagesModule,
        ViewModule], providers: [AdminGuardService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
