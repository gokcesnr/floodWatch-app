import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PredictionModalComponent } from '../prediction-modal/prediction-modal.component';

@Component({
  selector: 'app-flood-dashboard',
  templateUrl: './flood-dashboard.component.html',
  styleUrls: ['./flood-dashboard.component.css']
})
export class FloodDashboardComponent {
  
  constructor(private dialog: MatDialog) {} // Inject MatDialog service

  openPredictionModal() {
    const dialogRef = this.dialog.open(PredictionModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Prediction Data:', result); // Replace this with API call logic
      }
    });
  }
}
