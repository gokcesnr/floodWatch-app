import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloodDashboardComponent } from './flood-dashboard/flood-dashboard.component';

const routes: Routes = [
  { path: '', component: FloodDashboardComponent }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
