import { Component, OnInit, Input } from '@angular/core';
import {MapViewService} from '../services/mapView/map-view.service';
import esri = __esri;
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map-legend',
  templateUrl: './map-legend.component.html',
  styleUrls: ['./map-legend.component.scss']
})
export class MapLegendComponent implements OnInit {

  private _mapID: string;
  private _mapView: esri.MapView;

  @Input()
  set mapID(mapID: string) {
    this._mapID = mapID;
    if (this._mapID.length > 0) {
      this.loadMapLegend();
    }
  }
  constructor(private mapViewService: MapViewService) { }

  ngOnInit() {
  }

  loadMapLegend() {
    this._mapView = this.mapViewService.getMapView(this._mapID);

    // Add Layer to map
    loadModules([
      'esri/layers/FeatureLayer'
    ])
      .then(([FeatureLayer]) => {
        // points to the states layer in a service storing U.S. census data
        const fl = new FeatureLayer({
          url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3'
        });
        this._mapView.map.add(fl);  // adds the layer to the map
      });
  }
}
