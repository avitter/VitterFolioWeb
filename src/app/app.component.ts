import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

import { AppConfig } from './services/app-config.service';
import {Asset} from './models/asset.model';
import { AssetPortfolio } from './models/asset-portfolio.model';

@Component({
  selector: 'vit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vitter-Folio';
  loading = false;
  assets: Asset[];
  portfolio: AssetPortfolio[];

  // ESRI Map Configuration
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;

  // Create map/mapview properties
  mapProperties: __esri.MapProperties = {
    basemap: AppConfig.settings.map.mapProperties.basemap
  };

  mapViewProperties: __esri.MapViewProperties = {
    center: AppConfig.settings.map.mapViewProperties.center,
    zoom: AppConfig.settings.map.mapViewProperties.zoom
  };

  // Create Map IDs for bindings
  mapID1 = '';
  mapID2 = '';

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({uri: AppConfig.settings.serviceURL}),
      cache: new InMemoryCache()
    });

    apollo.watchQuery<any>({
      query: gql`query assets { assets {
        assetId
        name
        symbol
      } }`
    })
    .valueChanges
    .subscribe(({data, loading }) => {
      this.loading = loading;
      this.assets = data.assets;
    });

    apollo.watchQuery<any>({
      query: gql`query portfolio {
        portfolioAssets {
          units
          asset {
            assetId
            name
            symbol
          }
        }
      }`
    })
    .valueChanges
    .subscribe(({data, loading }) => {
      this.loading = loading;
      this.portfolio = data.portfolioAssets;
      // alert('portfolio count: ' + this.portfolio.length.toString());
    });
  }

  alert() {
    alert('this is a test');
  }

    // See app.component.html
    mapLoadedEvent1(result: any) {
      if (result.status) {
        this.mapID1 = result.mapID;
      }
      console.log('The map loaded: ' + status);
    }

    mapLoadedEvent2(result: any) {
      if (result.status) {
        this.mapID2 = result.mapID;
      }
      console.log('The map loaded: ' + status);
    }
}
