import { Component, OnInit, Input } from '@angular/core';
import { AppConfig } from '../services/app-config.service';

import {MapViewService} from '../services/mapView/map-view.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  mapID: string;

  @Input()
  mapProperties: __esri.MapProperties;

  @Input()
  mapViewProperties: __esri.MapViewProperties;

  constructor(private mapViewService: MapViewService) { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    // Register map view with MapViewService
    this.mapViewService.registerMapView(this.mapID, mapInfo.mapView);
  }

  ngOnInit() {
  }

}
