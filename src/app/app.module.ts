import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { FloodDashboardComponent } from './flood-dashboard/flood-dashboard.component';
import { PastFloodTableComponent } from './past-flood-table/past-flood-table.component';
import { FutureFloodTableComponent } from './future-flood-table/future-flood-table.component';
import { MapComponent } from './map/map.component';
import { SearchedPredictionComponent } from './searched-prediction/searched-prediction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { PredictionModalComponent } from './prediction-modal/prediction-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

// Routes
const routes: Routes = [
  { path: '', component: FloodDashboardComponent },
  { path: 'past-floods', component: PastFloodTableComponent },
  { path: 'future-floods', component: FutureFloodTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FloodDashboardComponent,
    PastFloodTableComponent,
    FutureFloodTableComponent,
    MapComponent,
    SearchedPredictionComponent,
    PredictionModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
