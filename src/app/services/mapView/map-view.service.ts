import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapViewService {

  private mapViews: { [index: string]: any} = {};
  private count = 0;
  constructor() { }

  public Count(): number {
    return this.count;
  }
  registerMapView(mapID: string, view: any) {
    if (!this.mapViews.hasOwnProperty(mapID)) {
        this.mapViews[mapID] = view;
        this.count++;
    }
  }

  public getMapView(mapID: string): any {
    return this.mapViews[mapID];
  }

  public unregisterMapView(mapID: string): any {
    const val = this.mapViews[mapID];
    delete this.mapViews[mapID];
    this.count--;
    return val;
}
}
