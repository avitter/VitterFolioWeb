import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TesterComponent } from './tester/tester.component';

// Routing
const routes: Routes = [
  {path: '', component: PortfolioComponent, pathMatch: 'full'},
  {path: 'Settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    PortfolioComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
