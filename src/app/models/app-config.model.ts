export interface IAppConfig {
  env: {
    name: string;
  };
  serviceURL: string;
  map: {
      mapProperties: {
        basemap: string
      },
      mapViewProperties: {
        center: number[],
        zoom: number
      }
  };
}
