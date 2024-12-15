import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-searched-prediction',
  templateUrl: './searched-prediction.component.html',
  styleUrls: ['./searched-prediction.component.css']
})
export class SearchedPredictionComponent implements OnInit {
  cityName: string = '';
  weatherData: { temperature: string; condition: string } = { temperature: '', condition: '' };
  floodRiskLevel: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { city: string }) {
    this.cityName = data.city;
  }

  ngOnInit(): void {
    this.fetchWeatherData();
    this.fetchFloodRiskLevel();
  }

  fetchWeatherData(): void {
    // Placeholder data, replace with actual API call later
    this.weatherData = {
      temperature: '25°C',
      condition: 'Sunny'
    };
  }

  fetchFloodRiskLevel(): void {
    // Placeholder flood risk level, replace with actual API call later
    this.floodRiskLevel = 'Low';
  }
}
