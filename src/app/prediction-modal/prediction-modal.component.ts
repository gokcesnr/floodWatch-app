import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient, // Inject HttpClient
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
      historicalFloods: [
        '', 
        [Validators.required, Validators.pattern('^(0|1)$')]
      ],
    });
  }

  /**
   * Ensures the historicalFloods input only contains 0 or 1.
   * Automatically resets the value if it's invalid.
   */
  validateHistoricalFloods() {
    const historicalFloodsControl = this.predictionForm.get('historicalFloods');
    const value = historicalFloodsControl?.value;

    // Reset the input if value is invalid (not 0 or 1)
    if (value !== '0' && value !== '1') {
      historicalFloodsControl?.setValue('');
    }
  }

  /**
   * Handles form submission and API interaction.
   */
  submitPrediction() {
    if (this.predictionForm.valid) {
      const predictionData = this.predictionForm.value;
      console.log('Prediction Input Data:', predictionData);

      // Send form data to API
      this.http.post('https://your-api-endpoint.com/predict', predictionData)
        .subscribe({
          next: (response) => {
            console.log('API Response:', response);
            this.dialogRef.close(response); // Close modal with API response
          },
          error: (err) => {
            console.error('API Error:', err);
            alert('An error occurred while predicting. Please try again.');
          }
        });
    } else {
      console.log('Form is invalid:', this.predictionForm.errors);
      alert('Please fill in all required fields with valid values.');
    }
  }
}
