import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule} from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { AngularEsriModule } from 'angular-esri-components';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './services/app-config.service';

import {MaterialModule} from './material/material.module';
// import {ModelModule} from './models/model.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MapComponent } from './map/map.component';
import { Http, HttpModule } from '@angular/http';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { MapLegendComponent } from './map-legend/map-legend.component';

// Routing
const routes: Routes = [
  {path: '', component: PortfolioComponent, pathMatch: 'full'},
  {path: 'Settings', component: SettingsComponent}
];

// Load Config
export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    PortfolioComponent,
    MapComponent,
    EsriMapComponent,
    MapLegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
    AngularEsriModule
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true }
 ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
