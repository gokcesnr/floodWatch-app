// Interface definition
interface FutureFlood {
  date: string;
  area: string;
  riskLevel: string;
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-future-flood-table',
  templateUrl: './future-flood-table.component.html',
  styleUrls: ['./future-flood-table.component.css']
})
export class FutureFloodTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'area', 'riskLevel'];
  dataSource = new MatTableDataSource<FutureFlood>([]);

  constructor() {}

  ngOnInit() {
    // Placeholder for API call
    this.dataSource.data = [
      { date: '2024-12-20', area: 'Izmir', riskLevel: 'High' },
      { date: '2024-12-25', area: 'Bursa', riskLevel: 'Moderate' },
    ];
  }
}
