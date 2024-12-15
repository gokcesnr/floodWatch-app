import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  private initMap(): void {
    // Create the map instance and set the view to Turkey's coordinates
    this.map = L.map('map', {
      center: [39.925533, 32.866287], // Coordinates for Turkey (Ankara as center)
      zoom: 6, // Adjust zoom level as needed
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  ngOnInit(): void {
    this.initMap();
  }
}
