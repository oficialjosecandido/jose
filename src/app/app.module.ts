// Core Module
import { NgModule, ChangeDetectionStrategy } from '@angular/core';

// Browser Module
import { BrowserModule } from '@angular/platform-browser';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Shared Module
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: ChangeDetectionStrategy, useValue: { name: 'OnPush' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
