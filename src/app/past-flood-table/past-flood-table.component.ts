// past-floods-table.component.ts

// Interface definition
interface PastFlood {
  date: string;
  area: string;
  severity: string;
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-past-flood-table',
  templateUrl: './past-flood-table.component.html',
  styleUrls: ['./past-flood-table.component.css']
})
export class PastFloodTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'area', 'severity'];
  dataSource = new MatTableDataSource<PastFlood>([]);

  constructor() {}

  ngOnInit() {
    // Placeholder for API call
    this.dataSource.data = [
      { date: '2024-12-10', area: 'Istanbul', severity: 'High' },
      { date: '2024-11-25', area: 'Ankara', severity: 'Moderate' },
    ];
  }
}
