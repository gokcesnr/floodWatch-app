import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-prediction-modal',
  templateUrl: './prediction-modal.component.html',
  styleUrls: ['./prediction-modal.component.css']
})
export class PredictionModalComponent {
  predictionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PredictionModalComponent>
  ) {
    this.predictionForm = this.fb.group({
      rainfall: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      riverDischarge: ['', Validators.required],
      waterLevel: ['', Validators.required],
      elevation: ['', Validators.required],
      populationDensity: ['', Validators.required],
      landCover: ['', Validators.required],
      soilType: ['', Validators.required],
      infrastructure: ['', Validators.required],
      historicalFloods: ['', Validators.required],
    });
  }

  submitPrediction() {
    if (this.predictionForm.valid) {
      const predictionData = this.predictionForm.value;
      console.log('Prediction Input Data:', predictionData);
      this.dialogRef.close(predictionData); // Close modal and return data
    }
  }
}
