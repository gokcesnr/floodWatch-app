import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;

  private map!: Map;

  ngAfterViewInit(): void {
    // Example data for markers (replace this with your API response)
    const markerData = [
      { lng: 32.866287, lat: 39.925533, label: 'Ankara' },
      { lng: 28.978359, lat: 41.00824, label: 'Istanbul' },
      { lng: 30.7148, lat: 36.8969, label: 'Antalya' },
    ];

    // Create marker features for each location
    const features = markerData.map((data) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([data.lng, data.lat])),
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'https://openlayers.org/en/latest/examples/data/icon.png',
            scale: 0.6,
          }),
        })
      );

      return feature;
    });

    // Vector layer for all markers
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features,
      }),
    });

    // Base map layer using OpenStreetMap
    const tileLayer = new TileLayer({
      source: new OSM(),
    });

    // Initialize the OpenLayers map
    this.map = new Map({
      target: this.mapContainer.nativeElement,
      layers: [tileLayer, vectorLayer],
      view: new View({
        center: fromLonLat([32.866287, 39.925533]),
        zoom: 6,
      }),
    });
  }
}
