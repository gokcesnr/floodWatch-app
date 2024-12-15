import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

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
import { MapComponent } from './map/map.component'; // Add this if app-map is part of your app

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
    MapComponent // Declare the MapComponent for app-map
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
